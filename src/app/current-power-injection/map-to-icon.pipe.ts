import { Pipe, PipeTransform } from '@angular/core';
import {ColorAndIcon, CurrentPowerInjectionScale} from "./current-power-injection-scale.model";

@Pipe({
  name: 'mapToIcon'
})
export class MapToIconPipe implements PipeTransform {

  transform(colorAndIcon: ColorAndIcon): string {
    return colorAndIcon.icon;
  }

}
