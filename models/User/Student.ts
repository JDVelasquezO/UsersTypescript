import { User } from "./User.js";

export class Student extends User {
    constructor (name: string, age: string) {
        super(name, age, true);
    }
}