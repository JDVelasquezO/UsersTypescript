import { Main } from '../Main.js';
import { User } from '../models/User/User.js';
import { Student } from '../models/User/Student.js';
import { Professor } from '../models/User/Professor.js';

export class Auth {

    /**
     * register
     */
    public register(name: string, age: string, type: boolean) {
        let user: User;
        if (type) {
            user = new Student(name, age);
        } else {
            user = new Professor(name, age);
        }
        
        Main.arrayUsers.push(user);
        
        for (let index = 0; index < Main.arrayUsers.length; index++) {
            const element = Main.arrayUsers[index];
        }

        console.log(Main.arrayUsers);
        localStorage.setItem('array', JSON.stringify(Main.arrayUsers));
    }

    /**
     * login
     */
    public login() {
        console.log(Main.arrayUsers);
        
    }

    /**
     * validate
     */
    public validate(name: string, age: string) {
        let msg: string = '';
        if (!name || !age) {
            msg = 'Debes llenar todos los campos';
        }
        return msg;
    }
}
