import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectComponentOption {
  id: number | string;
  selected: boolean;
  value: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnChanges, ControlValueAccessor {
  @Input() placeholder: string = 'Selecione ou digite';
  @Input() maxLength: number = 120;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() label: string = '';
  @Input() data: Array<SelectComponentOption> = [];
  control: FormControl = new FormControl();

  @ViewChild('options') optionsList!: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.selectedIndex = -1;
    }
  }

  dataFiltered: Array<SelectComponentOption> = [];
  inputValue = '';
  isOpen = false;
  isOptionSelected = false;
  selectedIndex = -1;
  scrollPosition = 0;


  constructor(private eRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataFiltered = this.data;
    }
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

  // Se o select estiver como true e mesmo assim digitar algo, ele apaga o valor do select
  filterData() {
    if (this.isOptionSelected) {
      this.clearInput();
    }

    if (this.inputValue) {
      this.dataFiltered = this.data.filter(option => option.value.toLowerCase().includes(this.inputValue.toLowerCase()));
    } else {
      this.dataFiltered = this.data;
    }
  }

  selectOption(id: number | string) {

    this.clearInput();

    this.control.setValue(id);
    this.inputValue = this.dataFiltered.find(option => option.id === id)?.value || '';
    this.isOptionSelected = true;
    this.dataFiltered.find(option => option.id === id)!.selected = true;
    this.toggleDropdown();
  }

  //limpa
  clearInput() {
    this.control.setValue('');

    this.inputValue = '';
    this.dataFiltered = this.data;
    this.isOptionSelected = false;
    this.dataFiltered.forEach(option => option.selected = false);
  }

}
