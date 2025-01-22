import { Component } from '@angular/core';
import { cars } from '../../data/mocks/mockData';

@Component({
  selector: 'app-cars-car-cero',
  standalone: false,

  templateUrl: './car-cero.component.html',
  styleUrl: './car-cero.component.css',
})
export class CarCeroComponent {
  public year = cars[0].year;
  public make = cars[0].make;
  public model = cars[0].model;
  public type = cars[0].type;
}
