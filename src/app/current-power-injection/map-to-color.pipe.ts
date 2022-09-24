import { Pipe, PipeTransform } from '@angular/core';
import {ColorAndIcon, CurrentPowerInjectionScale} from "./current-power-injection-scale.model";

@Pipe({
  name: 'mapToColor'
})
export class MapToColorPipe implements PipeTransform {

  transform(colorAndIcon: ColorAndIcon): string {
    return colorAndIcon.color;
  }

}
