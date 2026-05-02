import { cleanEmail, toCapitalize, verifyEmail, cleanPhone, parseAge, parseBoolean, cleanString } from "../utils/helpers";
import type { ReceivedUser, CleanUser } from "../types/user";
import {logger} from "../utils/logger";

export function transformUser(body: ReceivedUser){

    const data: CleanUser = {
        name: "",
        email: "",
        age: null,
        phone: "",
        active: false
    };

    if(body.name){
        data.name = toCapitalize(cleanString(body.name));
    } else {
        logger.warn("Name is missing or empty");
    };

    if(body.email){
        if(verifyEmail(body.email)){
            data.email = cleanEmail(body.email);
        } else {
            logger.warn(`Invalid email format: ${body.email}`);
        }
    } else {
        logger.warn("Email is missing or empty");
    }

    if(body.age){
        data.age = parseAge(body.age);
    } else {
        logger.warn("Age is missing or empty");
    }

    if(body.phone){
        data.phone = cleanPhone(body.phone.trim());
    } else {
        logger.warn("Phone is missing or empty");
    }

    if(body.active){
        data.active = parseBoolean(body.active);
    } else {
        logger.warn("Active is missing or empty");
    }

    return data;
}

