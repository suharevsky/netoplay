import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemPageRoutingModule } from './item-routing.module';
import { ItemPage } from './item.page';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { SharedModulePipe } from 'src/app/pipes/shared-module-pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule,
    SharedModulePipe,
    LazyLoadImageModule
  ],
  declarations: [ItemPage, RatingComponent],
})
export class ItemPageModule { }
