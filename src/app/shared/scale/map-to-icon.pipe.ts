import {Pipe, PipeTransform} from '@angular/core';
import {ColorAndIcon} from "./color-and-icon.model";

@Pipe({
  name: 'mapToIcon'
})
export class MapToIconPipe implements PipeTransform {

  transform(colorAndIcon: ColorAndIcon): string {
    return colorAndIcon.icon;
  }

}
