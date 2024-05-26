import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

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
