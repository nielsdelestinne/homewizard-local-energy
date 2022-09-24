import { Pipe, PipeTransform } from '@angular/core';
import {Scale} from "../shared/scale/scale.model";
import {ColorAndIcon} from "../shared/scale/color-and-icon.model";

@Pipe({
  name: 'toScaleElementUsingWifiStrength'
})
export class ToScaleElementUsingWifiStrengthPipe implements PipeTransform {

  transform(scale: Scale, valueInPercentage: number): ColorAndIcon {
    if(valueInPercentage >= 75) return scale.veryGood;
    if(valueInPercentage >= 55) return scale.good;
    if(valueInPercentage >= 30) return scale.neutral;
    if(valueInPercentage >= 15) return scale.bad;
    return scale.veryBad;
  }

}
