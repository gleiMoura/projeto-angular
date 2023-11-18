import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EditorDeTarefasComponent } from '../components/editor-de-tarefas/editor-de-tarefas.component';
import { CriadorDeTarefasComponent } from '../components/criador-de-tarefas/criador-de-tarefas.component';
import { PesquisaDeTarefasComponent } from '../components/pesquisa-de-tarefa/pesquisa-de-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EditorDeTarefasComponent,
    CriadorDeTarefasComponent,
    PesquisaDeTarefasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  tarefa = {
    id: 1,
    nome: "Estudar para a prova",
    proprietario: "joão pessoa",
    dataInicio: "2023-10-28",
    dataTermino: "2023-11-19"
  }

  segundaTarefa = {
    id: 2,
    nome: "Fazer musculação",
    proprietario: "joão pessoa",
    dataInicio: "2023-10-28",
    dataTermino: "2023-11-19"
  }

  tarefas = [this.tarefa, this.segundaTarefa];

  nome = 'João Lindão'
}

//Podemos exemplificar o uso de DATA BINDING usando o objeto tarefa no componente app. Lá criamos um card colocando
//as informações em {{tarefa.algumacoisa}}, esse é um exemplo também de interpolação, já que a INTERPOLAÇÃO é um
//tipo de dataBinding.
