import { Pipe, PipeTransform } from '@angular/core';
import {Scale} from "../shared/scale/scale.model";
import {ColorAndIcon} from "../shared/scale/color-and-icon.model";

@Pipe({
  name: 'toScaleElementUsingCurrentPower'
})
export class ToScaleElementUsingCurrentPowerPipe implements PipeTransform {

  transform(scale: Scale, valueInKwh: number): ColorAndIcon {
    if(valueInKwh >= 1) return scale.veryGood;
    if(valueInKwh >= 0) return scale.good;
    if(valueInKwh <= -2.5) return scale.veryBad;
    if(valueInKwh <= -1.25) return scale.bad;
    return scale.neutral;
  }

}
