import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

export interface SelectComponentOption {
  id: number;
  selected: boolean;
  value: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements OnInit {
  @Input() placeholder: string = 'Selecione ou digite';
  @Input() maxLength: number = 120;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() label: string = '';
  @Input() data: Array<SelectComponentOption> = [];

  @ViewChild('options') optionsList!: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  dataFiltered: Array<SelectComponentOption> = [];
  inputValue = '';
  isOpen = false;
  isOptionSelected = false;


  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    this.dataFiltered = this.data;
  }

  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

  // Se o select estiver como true e mesmo assim digitar algo, ele apaga o valor do select
  filterData() {
    if (this.isOptionSelected) {
      this.isOptionSelected = false;
      this.inputValue = '';
      this.dataFiltered = this.data;
    }

    if (this.inputValue) {
      this.dataFiltered = this.data.filter(option => option.value.toLowerCase().includes(this.inputValue.toLowerCase()));
    } else {
      this.dataFiltered = this.data;
    }
  }

  selectOption(id: number) {
    this.clearInput();
    this.inputValue = this.dataFiltered.find(option => option.id === id)?.value || '';
    this.isOptionSelected = true;
    this.dataFiltered.find(option => option.id === id)!.selected = true;
    this.toggleDropdown();
  }

  //limpa
  clearInput() {
    this.inputValue = '';
    this.dataFiltered = this.data;
    this.isOptionSelected = false;
    this.dataFiltered.forEach(option => option.selected = false);
  }

}
