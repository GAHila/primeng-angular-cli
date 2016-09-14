import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {Dropdown} from 'primeng/primeng';

@Component({
  selector: 'app-searchlog',
  templateUrl: './searchlog.component.html',
  styleUrls: ['./searchlog.component.css']
})
export class SearchlogComponent implements OnInit {

  cars: SelectItem[];

  selectedCar: string = 'BMW';

  constructor() {
    this.cars = [];
    this.cars.push({label: 'Audi', value: 'Audi'});
    this.cars.push({label: 'BMW', value: 'BMW'});
    this.cars.push({label: 'Fiat', value: 'Fiat'});
    this.cars.push({label: 'Ford', value: 'Ford'});
    this.cars.push({label: 'Honda', value: 'Honda'});
    this.cars.push({label: 'Jaguar', value: 'Jaguar'});
    this.cars.push({label: 'Mercedes', value: 'Mercedes'});
    this.cars.push({label: 'Renault', value: 'Renault'});
    this.cars.push({label: 'VW', value: 'VW'});
    this.cars.push({label: 'Volvo', value: 'Volvo'});
  }

  ngOnInit() {
  }

}
