import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from '../../services/tarefas-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AtualizacaoService } from '../../services/atualizacao-service.service';
import { OnInit } from '@angular/core';
import { TarefaType } from '../../services/tarefas-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'editor-de-tarefas',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './editor-de-tarefas.component.html'
})
export class EditorDeTarefasComponent {
  constructor(
    public tarefasService: TarefasService
  ) { }

  @Input() tarefa: TarefaType = {
    id: '',
    nome: '',
    proprietario: '',
    dataInicio: '',
    dataTermino: '',
    corDaTarefa: ''
  };

  tarefaEditada: TarefaType = { ...this.tarefa };



  ngOnInit() {
    console.log(this.tarefa)

    this.tarefaEditada = { ...this.tarefa }
  }

  editarTarefa() {
    this.tarefasService.editarTarefa(this.tarefa.id, this.tarefaEditada).subscribe(
      (resposta) => {
        alert('Tarefa editada com Sucesso!');
        console.log(resposta, "Resposta da edicao")
        //limpa os dados da tarefaEditada, que recebe eles dos imputs
        this.tarefaEditada = {
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
