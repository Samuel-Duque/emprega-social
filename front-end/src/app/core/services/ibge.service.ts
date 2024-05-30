import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../assets/environments/environment';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  getLocation(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       const latitude = position.coords.latitude;
    //       const longitude = position.coords.longitude;
    //       console.log('Latitude: ', latitude);
    //       console.log('Longitude: ', longitude);
    //     });
    //   } else {
    //     console.warn("Não foi possível obter a localização");
    //   }
    // }
}

  // Pega a lista de estados
  getUf(): Observable<any> {
    return this.http.get(environment.ibgeUfApi);
  }

  // Pega a lista de cidades de um estado
  getCity(uf: string): Observable<any> {
    return this.http.get(environment.ibgeCityApi.replace('{UF}', uf));
  }
}
