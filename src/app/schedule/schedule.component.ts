import { Component, Input } from '@angular/core';
import { FoodModel } from '../models/food.model';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {

  @Input() itemsList: Array<FoodModel> = undefined;

  constructor() { }
}
