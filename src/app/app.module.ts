import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { TarefasService } from "../services/tarefas-service.service";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
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
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
