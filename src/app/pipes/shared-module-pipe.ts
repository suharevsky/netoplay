import { NgModule } from '@angular/core';
import { ResizeImagePipe } from './resize-image.pipe';

@NgModule({
  declarations: [ResizeImagePipe],
  exports: [ResizeImagePipe]
})
export class SharedModulePipe { }