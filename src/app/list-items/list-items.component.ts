import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Array<Item> = new Array;
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.fetchItems();
  }


  fetchItems() {
    this.itemService.getItems().subscribe(response => {
      this.items = response.items.map(item => {
        return {
          id : item.id,
          imageUrl : item.imageUrl,
          title : item.title
        };
      });
      console.log(this.items);
    });
  }
  routeToItem(id: number): void {
    this.router.navigate(["items",id]);
  }

  deleteItem(id: number){
    this.itemService.deleteItem(id).subscribe(res => {
      console.log(res);
      this.fetchItems();
    })
  }

  editItem(id: number){
    this.router.navigate(["items",id,"edit"])
  }
}
