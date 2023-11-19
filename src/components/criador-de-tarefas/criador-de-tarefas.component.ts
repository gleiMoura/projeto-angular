import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TarefasService } from '../../services/tarefas-service.service';
import { TarefaType } from '../../services/tarefas-service.service';

@Component({
  selector: 'criador-de-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './criador-de-tarefas.component.html'
})
export class CriadorDeTarefasComponent {
  novaTarefa: TarefaType = {
    id: '',
    nome: '',
    proprietario: '',
    dataInicio: '',
    dataTermino: '',
    corDaTarefa: ''
  };

  constructor(
    public tarefasService: TarefasService
  ) { }

  criarTarefa() {
    this.tarefasService.criarTarefa({ ...this.novaTarefa, id: `${new Date().getTime()}` }).subscribe(
      (resposta) => {
        alert('Tarefa Criada com Sucesso!');
        console.log(resposta);

        //limpa os dados da novaTarefa, que recebe eles dos imputs
        this.novaTarefa = {
          id: '',
          nome: '',
          proprietario: '',
          dataInicio: '',
          dataTermino: '',
          corDaTarefa: ''
        };
      },
      (erro) => {
        console.error('Erro ao criar tarefa', erro)
      }
    )
  }
}

//Aqui estamos criando uma nova tarefa através da propriedade TWO-WAY DATA BINDING. Quando importamos o FORMSMODULE
//Isso nos permite usar o [(ngModule)] para incorporar valores do input e trazê-los para o componente.
