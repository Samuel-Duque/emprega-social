import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FlowbiteService } from '@app/core/services/flowbite.service';
import { initFlowbite, Dropdown, initDropdowns, DropdownOptions } from 'flowbite';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.css'
})
export class VagasComponent implements OnInit {

  // @ViewChild('dropdown') dropdown: any;

    constructor(private flowService: FlowbiteService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.flowService.init();
    }

    abrirDropdown(id: string) {
      const options: DropdownOptions = {


      };

      const $dropdown = document.getElementById(id);
      const $card = document.getElementById(id.replace('dropdown', 'button'));

      const dropdown =  new Dropdown($dropdown, $card, options);
      dropdown.show()
    }

    criarVaga() {
      this.router.navigate(['criar'], { relativeTo: this.route });
    }

}
