import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { EditorDeTarefasComponent } from "../components/editor-de-tarefas/editor-de-tarefas.component";
import { CriadorDeTarefasComponent } from "../components/criador-de-tarefas/criador-de-tarefas.component";
import { PesquisaDeTarefasComponent } from "../components/pesquisa-de-tarefa/pesquisa-de-tarefas.component";

@NgModule({
  declarations: [
    AppComponent,
    EditorDeTarefasComponent,
    CriadorDeTarefasComponent,
    PesquisaDeTarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorDeTarefasComponent,
    CriadorDeTarefasComponent,
    PesquisaDeTarefasComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
