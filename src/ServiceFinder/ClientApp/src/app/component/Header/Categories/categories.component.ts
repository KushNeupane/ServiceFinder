import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/user.category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categoryList: CategoryModel[];

  constructor(private service : AddserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.service.GetCategories().subscribe(result => {
      this.categoryList = result;
      console.log(this.categoryList);
    })
  }
}
