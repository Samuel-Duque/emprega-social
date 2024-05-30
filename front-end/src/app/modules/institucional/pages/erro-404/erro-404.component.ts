import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erro-404',
  templateUrl: './erro-404.component.html',
  styleUrl: './erro-404.component.css'
})
export class Erro404Component {

  constructor(private route: Router) { }

  voltar() {
    this.route.navigate(['/']);
  }
}
