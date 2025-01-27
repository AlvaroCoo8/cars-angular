import { Component } from '@angular/core';
import { cars } from '../../data/mocks/mockData';

@Component({
  selector: 'app-components-for-latest',
  standalone: false,

  templateUrl: './for-latest.component.html',
  styleUrl: './for-latest.component.css',
})
export class ForLatestComponent {
  public title: string = 'For Latest';
  public cars: any[] = cars;
}
