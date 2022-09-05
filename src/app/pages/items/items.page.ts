import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IItem } from 'src/app/interfaces/Item';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  imageIsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  items$: Observable<IItem[]>;

  constructor(public itemService: ItemService, public authService: AuthService) { }

  ngOnInit(): void {
    this.items$ = this.itemService.getList();
  }

  signOut(): void {
    this.authService.signOut()
  }

  trackByFn(index: number, element: any) {
    return element.id;
  }
}
