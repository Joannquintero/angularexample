export interface StudentCreate {
  id: number;
  UserId: number;
}

export interface StudentCredit {
  StudentId: number;
  Credits: number;
}

export interface Student {
  id: number;
  nombre: string;
}

export interface UserCreate {
  id: number;
  Name: string;
  SecondName: string;
  LastName: string;
  SecondLastName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export interface UserToken {
  id: number;
  expiration: string;
  token: string;
}

export interface UserObject {
  id: number;
  studentId: number;
  fullName: string;
  email: string;
  token: string;
}
