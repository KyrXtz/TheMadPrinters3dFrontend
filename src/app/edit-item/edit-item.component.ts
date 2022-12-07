import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  itemForm: FormGroup;
  itemId: string = "";
  item: Item = {} as Item;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService) {
      this.itemForm = this.fb.group({
        'id':[''],
        'description':[''],
      })
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      this.itemService.getItem(parseInt(this.itemId)).subscribe(res => {
        this.item = res;
        this.itemForm = this.fb.group({
          'id':[this.item.id],
          'description':[this.item.description],
        })
      })
    })
    
  }

  editItem(){
    this.itemService.editItem(this.itemForm.value).subscribe(res => {
      this.router.navigate(["items"]);
    })
  }

}
