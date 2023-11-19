import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface TarefaType {
  nome: string,
  proprietario: string,
  dataInicio: string,
  dataTermino: string
}

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  apiUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { };

  //cria um observable para pegar as tarefas existentes da API
  obterTarefas(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiUrl + '/pegarTarefas')
  }

  //Cria um observable para pegar as tarefas com base no ID
  obterTarefasPorId(id: number): Observable<any[]> {
    return this.httpClient.get<any>(`${this.apiUrl}/pegarTarefas/${id}`);
  }

  //obtem as tarefas passando como propriedade o nome do proprietário
  obterTarefasPorProprietario(proprietario: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/pegarTarefas/${proprietario}`);
  };

  //envia a tarefa para a API
  criarTarefa(novaTarefa: TarefaType): Observable<any[]> {
    return this.httpClient.post<any>(this.apiUrl + "/criarTarefa", novaTarefa);
  }

  editarTarefa(id: number, tarefa: TarefaType): Observable<any[]> {
    return this.httpClient.put<any>(`${this.apiUrl}/editarTarefa/${id}`, tarefa);
  }
}
