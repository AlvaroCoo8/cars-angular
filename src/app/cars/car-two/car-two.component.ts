import { Component } from '@angular/core';
import { cars } from '../../data/mocks/mockData';

@Component({
  selector: 'app-cars-car-two',
  standalone: false,

  templateUrl: './car-two.component.html',
  styleUrl: './car-two.component.css',
})
export class CarTwoComponent {
  public year = cars[2].year;
  public make = cars[2].make;
  public model = cars[2].model;
  public type = cars[2].type;
}
