import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURLWs } from '../shared/Config';

@Injectable({
  providedIn: 'root'
})
export class WebscrapingService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerOfertasWebScraping(): Observable<any>{
    return this.http.get<any>(baseURLWs + '/api/oferta');
  }

}
