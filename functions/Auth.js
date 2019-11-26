import { Main } from '../Main.js';
import { Student } from '../models/User/Student.js';
import { Professor } from '../models/User/Professor.js';
var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * register
     */
    Auth.prototype.register = function (name, age, type) {
        var user;
        if (type) {
            user = new Student(name, age);
        }
        else {
            user = new Professor(name, age);
        }
        Main.arrayUsers.push(user);
        for (var index = 0; index < Main.arrayUsers.length; index++) {
            var element = Main.arrayUsers[index];
        }
        console.log(Main.arrayUsers);
        localStorage.setItem('array', JSON.stringify(Main.arrayUsers));
    };
    /**
     * login
     */
    Auth.prototype.login = function () {
        console.log(Main.arrayUsers);
    };
    /**
     * validate
     */
    Auth.prototype.validate = function (name, age) {
        var msg = '';
        if (!name || !age) {
            msg = 'Debes llenar todos los campos';
        }
        return msg;
    };
    return Auth;
}());
export { Auth };
