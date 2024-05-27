import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  initFlowbite,
} from 'flowbite';
import { FlowbiteService } from './shared/services/flowbite.service';

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
