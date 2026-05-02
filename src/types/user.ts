export interface ReceivedUser {
    name: string | null 
    email: string | null
    age: string | null; 
    phone?: string | null 
    active: string | null 
}

export interface CleanUser  {
  name: string;
  email: string;
  age: number | null;
  phone?: string | undefined;
  active: boolean;
};

export interface CleanedUsers {
  success: CleanUser[];
  errors: { user: ReceivedUser; error: any }[];
}

export class ValidationError extends Error {
  constructor(message: string, public cause: any) {
    super(message);
    this.name = "ValidationError";
  }
}