import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Location } from '@angular/common';
import {
  initAccordions,
  initDropdowns,
  initFlowbite,
  initModals,
} from 'flowbite';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private location: Location) {}

  init(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('FlowbiteService.init()');
      initFlowbite();
    }
  }
}
