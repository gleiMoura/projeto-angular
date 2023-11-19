import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtualizacaoService {
  private atualizacaoSource = new Subject<void>();

  // Observable para que os componentes possam se inscrever
  atualizacao$ = this.atualizacaoSource.asObservable();

  // Método para notificar os assinantes quando ocorrer uma atualização
  notificarAtualizacao() {
    console.log("notificando")
    this.atualizacaoSource.next();
  }
}
