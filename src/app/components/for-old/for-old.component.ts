import { Component } from '@angular/core';
import { cars } from '../../data/mocks/mockData';

@Component({
  selector: 'app-components-for-old',
  standalone: false,

  templateUrl: './for-old.component.html',
  styleUrl: './for-old.component.css',
})
export class ForOldComponent {
  public title: string = 'For Old';
  public cars: any[] = cars;
}
