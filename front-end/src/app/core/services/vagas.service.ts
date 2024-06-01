import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../assets/environments/environment';
import { VagasParams } from '@app/shared/interfaces/vagas';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) {}

  getVagas(search: VagasParams) {
    return this.http.post(environment.apiBaseUrl + '/vagas/obter', search);
  }

  getVaga(id: string) {
    return this.http.get(environment.apiBaseUrl + '/vagas/obter/' + id);
  }
}
