import { EmpresaDto } from './EmpresaDto';
export class OfertaPorEmpresa{
    constructor(
        public id: Number,
	    public descripcion: String,
	    public jornada: String,
        public salario: String,
        public requisitos: String,
        public beneficios: String, 
        public area: String ,
        public fecha: Date,
        public empresa: EmpresaDto
    ){}
}