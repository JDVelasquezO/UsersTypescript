import { Auth } from '../functions/Auth.js';
import { DOMFunction } from '../functions/DOMFunctions.js';
var formRegister = document.getElementById('formRegister');
var formLogin = document.getElementById('formLogin');
var name = document.getElementById('name');
var age = document.getElementById('age');
var rol = document.getElementById('rol');
var info = document.getElementById('info');
var auth = new Auth();
if (formRegister) {
    formRegister.addEventListener('submit', function (e) {
        e.preventDefault();
        var msgValue = auth.validate(name.value, age.value);
        if (msgValue != '') {
            info.innerHTML = msgValue;
        }
        else {
            var type = verifyRol(rol.value);
            auth.register(name.value, age.value, type);
            info.innerHTML = 'Registrado Correctamente';
            // window.location.href = '/views/login.html';
        }
        DOMFunction.resetForm(formRegister);
    });
}
else if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();
        auth.login();
    });
}
function verifyRol(rol) {
    var type = false;
    if (rol === 'Estudiante') {
        type = true;
    }
    return type;
}
