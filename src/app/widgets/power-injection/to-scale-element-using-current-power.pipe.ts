import { Pipe, PipeTransform } from '@angular/core';
import {Scale} from "../../shared/scale/scale.model";
import {ColorAndIcon} from "../../shared/scale/color-and-icon.model";

@Pipe({
  name: 'toScaleElementUsingCurrentPower'
})
export class ToScaleElementUsingCurrentPowerPipe implements PipeTransform {

  transform(scale: Scale, valueInkWh: number): ColorAndIcon {
    if(valueInkWh >= 1) return scale.veryGood;
    if(valueInkWh >= 0) return scale.good;
    if(valueInkWh <= -2.5) return scale.veryBad;
    if(valueInkWh <= -1.25) return scale.bad;
    return scale.neutral;
  }

}
