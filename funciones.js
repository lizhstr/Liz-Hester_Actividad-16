class Usuario {
    constructor(nombre, correo, edad, comentario) {
        this._nombre = nombre,
        this._correo = correo;
        this._edad = edad;
        this._comentario = comentario;
    }
}

const usuario1 = new Usuario('John','john@john.com','45','This is John.');

const usuario2 = new Usuario('Mary','mary@mary.com','36');

const usuario3 = new Usuario('George','george@george.com','64');

const datosUsuarios = [usuario1, usuario2, usuario3];

console.log(datosUsuarios);