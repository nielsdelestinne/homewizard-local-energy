import {Pipe, PipeTransform} from '@angular/core';
import {ColorAndIcon} from "./color-and-icon.model";

@Pipe({
  name: 'mapToColor'
})
export class MapToColorPipe implements PipeTransform {

  transform(colorAndIcon: ColorAndIcon): string {
    return colorAndIcon.color;
  }

}
