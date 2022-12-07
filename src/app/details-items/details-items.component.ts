import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-details-items',
  templateUrl: './details-items.component.html',
  styleUrls: ['./details-items.component.css']
})
export class DetailsItemsComponent implements OnInit {
  id: string = "";
  item: Item = {} as Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {
    this.fetchData();
   }

  ngOnInit(): void {
  }

  fetchData(){
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id;
    }), mergeMap(id => this.itemService.getItem(id))).subscribe(res => {
      this.item = res;
    })
  }

}
