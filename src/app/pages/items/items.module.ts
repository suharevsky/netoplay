import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { ItemsPageRoutingModule } from './items-routing.module';
import { ItemsPage } from './items.page';
import { SharedModulePipe } from 'src/app/pipes/shared-module-pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ItemComponent } from 'src/app/components/item/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    ScrollingModule,
    SharedModulePipe,
    LazyLoadImageModule
  ],
  declarations: [ItemsPage, ItemComponent],

})
export class ItemsPageModule {}
