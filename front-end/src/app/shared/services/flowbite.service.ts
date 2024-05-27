import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  initFlowbite,
} from 'flowbite';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  init(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
