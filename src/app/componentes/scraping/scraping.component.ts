import { Component, OnInit } from '@angular/core';
import { WebscrapingService } from '../../services/webscraping.service';
import { EmpresaService } from '../../services/empresa.service';
import { Oferta } from '../../shared/WebScrap/Oferta';
import { NgxSpinnerService } from "ngx-spinner";
import { OfertaPorEmpresa } from '../../shared/Dto/OfertaPorEmpresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {

  listaDeOfertas: Oferta[];
  listaPremium: OfertaPorEmpresa[];

  constructor(
    private webscrapingService: WebscrapingService,
    private spinner: NgxSpinnerService,
    private empresaService: EmpresaService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.webscrapingService.obtenerOfertasWebScraping()
      .subscribe( data => {
        this.listaDeOfertas = data;
        this.spinner.hide();
      }, err => {
        console.log(err);
        this.spinner.hide();
      })

    
    this.empresaService.obtenerOferfasEmpleoTotales()
    .subscribe( data => {
      this.listaPremium = data;
    }, err => {
      console.log(err);
    })
  }

  ofertaDetalle(ofertaDetalle: any): void{
    console.log(ofertaDetalle);
    this.route.navigate(['/oferta-detalle']);
    window.sessionStorage.setItem('OFERTA-DETALLE', JSON.stringify(ofertaDetalle));
  }

}
