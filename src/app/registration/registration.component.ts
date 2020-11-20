import { Component } from '@angular/core';
import * as moment from 'moment';
import { FoodModel } from '../models/food.model';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {

  names: string = "";
  dates: string = "";
  errormessage: string = undefined;
  items: Array<FoodModel> = new Array<FoodModel>();

  constructor() { }

  generateList(): void {

    this.items = new Array<FoodModel>();
    this.errormessage = undefined;

    const _names: Array<any> = this.names.split("\n");
    const _dates = this.dates.split("\n");
    
    _names.forEach((name: string, index: number) => {
      
      if (_dates[index].indexOf(' to ') > -1) {

        const _dates_tmp: Array<string>  = _dates[index].split(' to ');

        if (moment(_dates_tmp[0]) < moment(_dates_tmp[1])) {

          let dates: Array<string> = this.getRangeDays(moment(_dates_tmp[0]), moment(_dates_tmp[1]));

          dates.forEach((date:string) => {
            
            let food: FoodModel = new FoodModel();
            food.name = name;
            food.date = date;
            this.items.push(food);
          });
        
          this.items.sort((left: FoodModel, right: FoodModel) => {

            return moment.utc(left.date).diff(moment.utc(right.date));
          });
        } else {

          this.errormessage = "La fecha inicial debe ser menor a la fecha final";
        }
      } else {

        this.errormessage = "Formato de fechas incorrecto. debes ingresar el siguiente formato : YYYY-MM-DD to YYYY-MM-DD";
      }
    });
  }

  private getRangeDays (from: moment.Moment, to: moment.Moment): Array<string> {

    let dates: Array<string> = new Array<string>();
  	while (from.isSameOrBefore(to)) {

    	dates.push(from.format('YYYY-MM-DD'));
      from.add(1, 'days');
  	}
  	return dates;
};
}
