import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EditorDeTarefasComponent } from '../components/editor-de-tarefas/editor-de-tarefas.component';
import { CriadorDeTarefasComponent } from '../components/criador-de-tarefas/criador-de-tarefas.component';
import { PesquisaDeTarefasComponent } from '../components/pesquisa-de-tarefa/pesquisa-de-tarefas.component';
import { TarefasService } from '../services/tarefas-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AtualizacaoService } from '../services/atualizacao-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    EditorDeTarefasComponent,
    CriadorDeTarefasComponent,
    PesquisaDeTarefasComponent
  ],
  providers: [TarefasService, AtualizacaoService, DatePipe],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  //Criamos esse constructor e o código abaixo para pegar os dados da API por meio do SERVICE que o ANGULAR
  //disponibiliza para nós em sua biblioteca. O Injectable nos permite dizer para o ANGULAR que se trata de um
  //SERVIÇO e que injetaremos dados nele.
  private subscription: Subscription;

  tarefasDaAPI: any;

  constructor(
    public tarefasService: TarefasService,
    private atulizacaoService: AtualizacaoService,
    private datePipe: DatePipe
  ) {
    this.subscription = this.atulizacaoService.atualizacao$.subscribe(() => {
      this.atualizarComponente()
    })
  }

  atualizarComponente() {
    console.log("componente foi atualizado")
    this.obterTarefasDaAPI();
  }

  ngOnInit() {
    this.obterTarefasDaAPI();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  obterTarefasDaAPI() {
    this.tarefasService.obterTarefas().subscribe(data => {
      this.tarefasDaAPI = data;
      console.log(this.tarefasDaAPI)
    })
  }

  excluirTarefa(id: string) {
    this.tarefasService.excluirTarefa(id).subscribe(resposta => {
      location.reload();
      console.log(resposta, "resposta de exclusão");
    }, (erro) => {
      console.error(erro);
      alert('Não foi possível excluir a tarefa no momento')
    }
    )
  }

  componenteVisivel = false;

  editarTarefa() {
    this.componenteVisivel = true;
  }

  cancelarEdicao() {
    this.componenteVisivel = false;
  }
}

//Podemos exemplificar o uso de DATA BINDING usando o objeto tarefa no componente app. Lá criamos um card colocando
//as informações em {{tarefa.algumacoisa}}, esse é um exemplo também de interpolação, já que a INTERPOLAÇÃO é um
//tipo de dataBinding.

//O uso do NGSTYLE pode ser feito para tornar a cor dinâmica, como fizemos com as tarefas.
