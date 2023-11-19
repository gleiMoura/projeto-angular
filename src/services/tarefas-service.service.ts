import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AtualizacaoService } from './atualizacao-service.service';

export interface TarefaType {
  id: string,
  nome: string,
  proprietario: string,
  dataInicio: string,
  dataTermino: string,
  corDaTarefa: string
}

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  apiUrl = 'http://localhost:5000';

  constructor(
    private httpClient: HttpClient,
    private atualizacaoService: AtualizacaoService
  ) { };


  //cria um observable para pegar as tarefas existentes da API
  obterTarefas(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiUrl + '/pegarTarefas')
  }

  //Cria um observable para pegar as tarefas com base no ID
  obterTarefaPorId(id: string): Observable<any[]> {
    return this.httpClient.get<any>(`${this.apiUrl}/pegarTarefas/${id}`);
  }

  //obtem as tarefas passando como propriedade o nome do proprietário
  obterTarefasPorProprietario(proprietario: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/pegarTarefas/${proprietario}`);
  };

  //envia a tarefa para a API
  criarTarefa(novaTarefa: TarefaType): Observable<any[]> {
    return this.httpClient.post<any>(this.apiUrl + "/criarTarefa", novaTarefa)
      .pipe(
        tap(() => this.atualizacaoService.notificarAtualizacao())
      )
  }

  editarTarefa(id: string, tarefa: TarefaType): Observable<any[]> {
    return this.httpClient.put<any>(`${this.apiUrl}/editarTarefa/${id}`, tarefa)
      .pipe(
        tap(() => this.atualizacaoService.notificarAtualizacao())
      )
  }

  excluirTarefa(id: string): Observable<any> {
    this.atualizacaoService.notificarAtualizacao();

    return this.httpClient.delete<any>(`${this.apiUrl}/deletarTarefa/${id}`);
  }
}
