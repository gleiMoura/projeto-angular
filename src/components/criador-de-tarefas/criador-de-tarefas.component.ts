import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'criador-de-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criador-de-tarefas.component.html'
})
export class CriadorDeTarefasComponent {
  novaTarefa = {
    nome: '',
    proprietario: '',
    dataInicio: '',
    dataTermino: '',
    corDaTarefa:''
  };


}

//Aqui estamos criando uma nova tarefa através da propriedade TWO-WAY DATA BINDING. Quando importamos o FORMSMODULE
//Isso nos permite usar o [(ngModule)] para incorporar valores do input e trazê-los para o componente.
