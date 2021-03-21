import {UsuarioDto} from './UsuarioDto';
export class EstudianteDto{
    constructor(
        public id: Number,
        public nombre: String,
        public apellido: String,
        public curriculum: any,
        public suscripcion: any,
        public usuario: UsuarioDto
    ){}
}