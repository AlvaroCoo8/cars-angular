import { Component } from '@angular/core';
import { cars } from '../../data/mocks/mockData';

@Component({
  selector: 'app-cars-car-one',
  standalone: false,

  templateUrl: './car-one.component.html',
  styleUrl: './car-one.component.css',
})
export class CarOneComponent {
  public year = cars[1].year;
  public make = cars[1].make;
  public model = cars[1].model;
  public type = cars[1].type;
}
