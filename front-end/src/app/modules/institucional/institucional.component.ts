import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrl: './institucional.component.css'
})
export class InstitucionalComponent implements OnInit{

  constructor(private router: Router) { }

  abrirLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.flowbite();
  }

  private flowbite() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('initFlowbite');

        initFlowbite();
      }
    });
  }

}
