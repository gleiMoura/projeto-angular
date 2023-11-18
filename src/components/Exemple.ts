import { Component } from "@angular/core";

@Component({
  selector: 'editor-de-tarefas',
  template: `
    <form>
      <label for="nomeEditado">Nome da Tarefa:</label>
      <input type="text" id="nomeEditado" name="nomeEditado"><br>

      <label for="proprietarioEditado">Proprietário:</label>
      <input type="text" id="proprietarioEditado" name="proprietarioEditado"><br>

      <label for="dataInicioEditada">Data de Início:</label>
      <input type="date" id="dataInicioEditada" name="dataInicioEditada"><br>

      <label for="dataTerminoEditada">Data de Término:</label>
      <input type="date" id="dataTerminoEditada" name="dataTerminoEditada"><br>

      <input type="submit" id="buttonDeEdicao" value="Editar Tarefa">
      <button>cancelar</button>
    </form>
  `
})

export class EditorDeTarefas {

}
