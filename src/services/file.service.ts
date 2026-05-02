import fs from 'fs';
import path from 'path';
import {logger} from "../utils/logger";

export function readJsonFile(filePath: string): any {
    try {
        const data = fs.readFileSync(path.resolve(filePath), 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        logger.error(`Error reading file from disk: ${error}`);
        throw error;
    }
}

export function writeJsonFile(filePath: string, data: any): void {
    try {
        fs.writeFileSync(path.resolve(filePath), JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        logger.error(`Error writing file to disk: ${error}`);
        throw error;
    }
}

export function writeCsvFile(filePath: string, data: any[]): void {
    try {
        const headers = ["name", "email", "age", "phone", "active"];
        const csv = [
        headers.join(","),
        ...data.map(row => headers.map(h => row[h]).join(","))
        ].join("\n");
        fs.writeFileSync(path.resolve(filePath), csv, 'utf-8');
    } catch (error) {
        logger.error(`Error writing CSV file to disk: ${error}`);
        throw error;
    }
}