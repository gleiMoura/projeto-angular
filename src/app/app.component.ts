import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EditorDeTarefasComponent } from '../components/editor-de-tarefas/editor-de-tarefas.component';
import { CriadorDeTarefasComponent } from '../components/criador-de-tarefas/criador-de-tarefas.component';
import { PesquisaDeTarefasComponent } from '../components/pesquisa-de-tarefa/pesquisa-de-tarefas.component';
import { TarefasService } from '../services/tarefas-service.service';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [TarefasService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tarefa = {
    id: 1,
    nome: "Estudar para a prova",
    proprietario: "joão pessoa",
    dataInicio: "2023-10-28",
    dataTermino: "2023-11-19",
    corDaTarefa: "#123123"
  }

  segundaTarefa = {
    id: 2,
    nome: "Fazer musculação",
    proprietario: "joão pessoa",
    dataInicio: "2023-10-28",
    dataTermino: "2023-11-19",
    corDaTarefa: "#222333"
  }

  tarefas = [this.tarefa, this.segundaTarefa];

  //Criamos esse constructor e o código abaixo para pegar os dados da API por meio do SERVICE que o ANGULAR
  //disponibiliza para nós em sua biblioteca. O Injectable nos permite dizer para o ANGULAR que se trata de um
  //SERVIÇO e que injetaremos dados nele.
  tarefasDaAPI: any;

  constructor(
    public tarefasService: TarefasService
  ) { }

  ngOnInit() {
    this.obterTarefasDaAPI();
  }

  obterTarefasDaAPI() {
    this.tarefasService.obterTarefas().subscribe(data => {
      this.tarefasDaAPI = data;
      console.log(this.tarefasDaAPI)
    })
  }
}

//Podemos exemplificar o uso de DATA BINDING usando o objeto tarefa no componente app. Lá criamos um card colocando
//as informações em {{tarefa.algumacoisa}}, esse é um exemplo também de interpolação, já que a INTERPOLAÇÃO é um
//tipo de dataBinding.

//O uso do NGSTYLE pode ser feito para tornar a cor dinâmica, como fizemos com as tarefas.
