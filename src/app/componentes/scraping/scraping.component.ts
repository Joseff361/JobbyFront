import { Component, OnInit } from '@angular/core';
import { WebscrapingService } from '../../services/webscraping.service';
import { Oferta } from '../../shared/WebScrap/Oferta';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {

  listaDeOfertas: Oferta[];

  constructor(
    private webscrapingService: WebscrapingService,
    private spinner: NgxSpinnerService
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
  }

}
