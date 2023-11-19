import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  apiUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { };

  obterTarefas(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiUrl + '/pegarTarefas')
  }
}

