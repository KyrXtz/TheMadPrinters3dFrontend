import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreateItemComponent {
  itemForm : FormGroup
  constructor(private fb: FormBuilder,
     private itemService: ItemService,
     private toastrService:ToastrService) { 
    this.itemForm = this.fb.group({
      'ImageUrl' : ['',Validators.required],
      'Description': ['']
    })
  }

  ngOnInit(): void {
  }

  get imageUrl(){
    return this.itemForm.get('ImageUrl');
  }

  create(){
    this.itemService.create(this.itemForm.value).subscribe(res => {
      this.toastrService.success("Success");
      console.log(res)
    })
  }

}
