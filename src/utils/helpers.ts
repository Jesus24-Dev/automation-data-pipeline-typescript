import { PhoneRegex } from "./regex";
import { EmailRegex } from "./regex";

export function toCapitalize(str: string){
    return str.split(" ").map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(" ");
};

export const parseAge = (age: string) => {
    const num = Number(age);
    return isNaN(num) ? null : num;
}

export const cleanString = (str: string) => str.trim().toLocaleLowerCase();

export const parseBoolean = (value: string) => {
    return ["true", "yes", "1"].includes(value.toLowerCase());
}

export function cleanPhone(phone: string){
    return phone.replace(PhoneRegex, "");
};

export function cleanEmail(email: string){
    return email.trim().toLowerCase()
}

export function verifyEmail(email: string){
    return EmailRegex.test(email);
};