import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '@app/shared/services/flowbite.service';
import { initFlowbite, Dropdown } from 'flowbite';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.css'
})
export class VagasComponent implements OnInit {

    constructor(private flowService: FlowbiteService) { }

    ngOnInit(): void {
      this.flowService.init();
    }

    abrirDropdown(id: string) {
      const dropdown = new Dropdown(document.getElementById(id));
      dropdown.show()
    }

}
