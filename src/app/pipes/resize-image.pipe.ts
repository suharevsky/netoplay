import { Pipe, PipeTransform } from '@angular/core';
import { Platform } from '@ionic/angular';

@Pipe({
  name: 'resizeImage'
})
export class ResizeImagePipe implements PipeTransform {

  constructor(public platform: Platform) { }

  transform(url: string, newSize: string | null = null): string {
    const currentSize = this.getParameterByName('size', url);

    if (!newSize) {
      newSize = window.innerWidth.toFixed();
    }

    return url?.replace(currentSize, `${newSize}x${newSize}`);
  }

  private getParameterByName(name: string, url: string): string {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
