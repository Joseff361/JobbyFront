import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { OfertaPorEmpresa } from '../../shared/Dto/OfertaPorEmpresa';

@Component({
  selector: 'app-info-areas2',
  templateUrl: './info-areas2.component.html',
  styleUrls: ['./info-areas2.component.css']
})
export class InfoAreas2Component implements OnInit {

  ofertasEmpleo: OfertaPorEmpresa[];

  constructor(
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.empresaService.obtenerOferfasEmpleoPorEmpresa()
      .subscribe( data => {
        this.ofertasEmpleo = data;
        console.log( this.ofertasEmpleo)
      }, err => {
        console.log(err);
      })
  }

}
