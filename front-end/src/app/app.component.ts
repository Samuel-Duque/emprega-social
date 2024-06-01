import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from './core/services/flowbite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  constructor(private flowService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowService.init();
  }
}
