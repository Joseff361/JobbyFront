import { Component, OnInit, Input } from '@angular/core';
import { OfertaPorEmpresa } from '../../shared/Dto/OfertaPorEmpresa';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-oferta-detalle',
  templateUrl: './oferta-detalle.component.html',
  styleUrls: ['./oferta-detalle.component.css']
})
export class OfertaDetalleComponent implements OnInit {
  oferta: OfertaPorEmpresa;

  constructor(
    private route: Router,
    private spinner: NgxSpinnerService,
  ) { 
  }

  ngOnInit(): void {
    this.spinner.show();
    this.oferta = JSON.parse(window.sessionStorage.getItem('OFERTA-DETALLE'));
    this.spinner.hide();
  }

  volver(): void{
    this.route.navigate(['/scraping']);
  }
}
