import { User } from "./User.js";

export class Professor extends User {
    constructor (name: string, age: string) {
        super(name, age, false);
    }
}