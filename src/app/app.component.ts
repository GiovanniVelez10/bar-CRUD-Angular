import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './Modelo/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto01';

  personas:Persona[];

  constructor(private router:Router){}

    Listar(){
      this.router.navigate(["listar"]);
    }
    Nuevo(){
      this.router.navigate(["add"]);
    }
    Editar(){
      this.router.navigate(["edit"]);
    }
    Eliminar(){
      this.router.navigate(["add"]);
    }

}
