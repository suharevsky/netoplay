import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/interfaces/Item';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  item$: Observable<IItem>;
  placeholder: string = 'assets/placeholder.png';

  constructor(
    private activatedRoute: ActivatedRoute,
    public itemService: ItemService) { }

  ngOnInit(): void {
    // get the data from the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.item$ = this.itemService.get(+id);
  }
}
