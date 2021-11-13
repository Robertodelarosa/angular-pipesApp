import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../pages/interfaces/ventas.interfaces';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(color: Color): string {
    return Color[color];
  }
}
