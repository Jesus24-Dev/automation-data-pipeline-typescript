import { transformUser } from "./transformer";
import type { CleanedUsers, ReceivedUser } from "../types/user";
import { validateUser } from "./validator";
import { ValidationError } from "../types/user";
import {logger} from "../utils/logger";

export const cleanedUsers = (rawUsers: ReceivedUser[]): CleanedUsers => {
    const cleaned = rawUsers.reduce((acc: CleanedUsers, user: ReceivedUser) => {
    try {
        const transformedUsers = transformUser(user);
        const cleanedUsers = validateUser(transformedUsers);
        acc.success.push(cleanedUsers);
    } catch (error: ValidationError | string | unknown) {
        logger.error('Error occurred while processing user');
        acc.errors.push({ user, error: error instanceof ValidationError ? error.cause : error as string });
    }
    logger.info("Pipeline finished", {
        total: rawUsers.length,
        success: acc.success.length,
        failed: acc.errors.length
    });
    return acc;
    }, { success: [], errors: [] });

    return cleaned;
}