import { Pipe, PipeTransform } from '@angular/core';
import {ColorAndIcon, PowerInjectionScale} from "./power-injection-scale.model";

@Pipe({
  name: 'mapToColorAndIcon'
})
export class MapToColorAndIconPipe implements PipeTransform {

  transform(scale: PowerInjectionScale, valueInKwh: number): ColorAndIcon {
    if(valueInKwh >= 1) return scale.veryPositive;
    if(valueInKwh >= 0) return scale.positive;
    if(valueInKwh <= -2.5) return scale.extremelyNegative;
    if(valueInKwh <= -1.25) return scale.veryNegative;
    return scale.negative;
  }

}
