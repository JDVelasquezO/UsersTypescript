import { Auth } from '../functions/Auth.js';
import { DOMFunction } from '../functions/DOMFunctions.js';

let formRegister = <HTMLElement>document.getElementById('formRegister');
let formLogin = <HTMLElement>document.getElementById('formLogin');
let name = <HTMLInputElement>document.getElementById('name');
let age = <HTMLInputElement>document.getElementById('age');
let rol = <HTMLInputElement>document.getElementById('rol');
let info = <HTMLElement>document.getElementById('info');
let auth: Auth = new Auth();

if (formRegister) {
    formRegister.addEventListener('submit', e => {
        e.preventDefault();
    
        let msgValue: string = auth.validate(name.value, age.value);
        
        if (msgValue != '') {
            info.innerHTML = msgValue;
        } else {
            let type: boolean = verifyRol(rol.value);
            auth.register(name.value, age.value, type);
            info.innerHTML = 'Registrado Correctamente';
            // window.location.href = '/views/login.html';
        }
        DOMFunction.resetForm(formRegister);
    })
} else if (formLogin) {
    formLogin.addEventListener('submit', e => {
        e.preventDefault();
    
        auth.login();
    })
}



function verifyRol(rol: string) {
    let type: boolean = false;
    if (rol === 'Estudiante') {
        type = true;
    }

    return type;
}
