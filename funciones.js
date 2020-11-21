class Usuario {
    constructor(nombre, correo, edad, comentario) {
        this._nombre = nombre,
        this._correo = correo;
        this._edad = edad;
        this._comentario = comentario;
    }
}

const usuario1 = new Usuario('John','john@john.com','45','This is John.');
console.log(usuario1.nombre);