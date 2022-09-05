import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/interfaces/Item';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;

  constructor(public itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  getItem(item: IItem): void {
    // passing data state as route params
    this.itemService.set(item);
    this.router.navigate([`item/${item.id}`])
  }
}
