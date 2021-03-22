import { Injectable } from '@angular/core';
import { baseURL } from '../shared/Config';
import { EmpresaDto } from '../shared/Dto/EmpresaDto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../shared/Dto/Empresa';
import { UsuarioDto } from '../shared/Dto/UsuarioDto';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerTodasLasEmpresas(): Observable<EmpresaDto[]>{
      return this.http.get<EmpresaDto[]>(baseURL + '/api/empresas');
  }

  public obtenerEmpresaPorId(id: String): Observable<EmpresaDto>{
    return this.http.get<EmpresaDto>(baseURL + "/api/empresas/" + id);
  }

  public registrarEmpresa(empresa: Empresa): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(baseURL + '/api/empresas', empresa, httpOptions);
  }

  public obtenerEmpresaPorusuario(usuario: UsuarioDto): Observable<EmpresaDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<EmpresaDto>(baseURL + '/api/empresaInfo', usuario, httpOptions);    
  }
  
}
