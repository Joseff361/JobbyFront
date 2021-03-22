import { Component, OnInit } from '@angular/core';
import { SesionStorageService } from '../../services/sesion-storage.service';
import { EstudianteService } from '../../services/estudiante.service';
import { EmpresaService } from '../../services/empresa.service';
import { UsuarioDto } from 'src/app/shared/Dto/UsuarioDto';
import { EstudianteDto } from 'src/app/shared/Dto/EstudianteDto';
import { EmpresaDto } from 'src/app/shared/Dto/EmpresaDto';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  tipo_estudiante: boolean = false;
  tipo_empresa: boolean = false;

  usuario: UsuarioDto;
  estudiante: EstudianteDto = null;
  empresaDto: EmpresaDto = null;


  constructor(
    private sesionStorageService: SesionStorageService,
    private estudianteService: EstudianteService,
    private empresaService: EmpresaService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.tipo_empresa = false;
    this.tipo_estudiante = false;
    this.spinner.show();

    this.usuario = new UsuarioDto(Number(this.sesionStorageService.obtenerId()),
                                      this.sesionStorageService.obtenerCorreo(),
                                      this.sesionStorageService.obtenerContrasenia(),
                                      this.sesionStorageService.obtenerTipo());

    if(this.sesionStorageService.obtenerTipo() == 'ESTUDIANTE'){
      this.tipo_estudiante = true;
      this.estudianteService.obtenerEstudiantePorusuario(this.usuario)
        .subscribe( data => {
          this.estudiante = data;
          console.log(this.estudiante)
          this.spinner.hide();
        }, err => {
          console.log(err);
          this.spinner.hide();
        })
    }else{
      this.tipo_empresa = true;
      this.empresaService.obtenerEmpresaPorusuario(this.usuario)
        .subscribe( data => {
          this.empresaDto = data;
          console.log(this.empresaDto);
          this.spinner.hide();
        }, err => {
          console.log(err);
          this.spinner.hide();
        })
    }
  }

}
