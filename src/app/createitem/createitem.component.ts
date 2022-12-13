import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateItemComponent {
  itemForm : FormGroup
  constructor(private fb: FormBuilder,
     private itemService: ItemService,
     private toastrService:ToastrService) { 
    this.itemForm = this.fb.group({
      'Title' : ['',Validators.required],
      'ImageUrl' : ['',Validators.required],
      'Description': ['']
    })
  }

  ngOnInit(): void {
  }

  get imageUrl(){
    return this.itemForm.get('ImageUrl');
  }
  get title(){
    return this.itemForm.get('Title');
  }

  create(){
    this.itemService.create(this.itemForm.value).subscribe(res => {
      this.toastrService.success("Success");
      console.log(res)
    })
  }

}
