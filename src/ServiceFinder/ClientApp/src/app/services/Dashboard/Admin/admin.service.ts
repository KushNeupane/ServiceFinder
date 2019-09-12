import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from 'src/app/models/user.category.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseurl = environment.baseURL;
  constructor(private http: HttpClient) { }


  GetCities() {
     
    return this.http.get(this.baseurl + "api/city/getCities");
  }

  AddCity(data) {
    return this.http.post(this.baseurl + "api/city/addCity", data);
  }

  DeleteCity(id) {
    return this.http.delete(this.baseurl + "api/city/deleteCity/" + id);
  }

  UpdateCity(data, id) {
    return this.http.put(this.baseurl + "api/city/editCity/" + id, data);
  }
  GetCategories() {
    return this.http.get<CategoryModel[]>(this.baseurl + 'api/admin/getCategories')
  }

  AddCategory(selectedFile, options){ 
     ;  
    return this.http.post(this.baseurl + 'api/admin/addCategory', selectedFile, options)
  }

  DeleteCategory(data){
    return this.http.put(this.baseurl +'api/admin/deleteCategory', data)
  }
  EditCategory(id, option){
    return this.http.put(this.baseurl +'api/admin/editCategory/' +id , option)
  }

  GetCategoryById(id){
    return this.http.get(this.baseurl +'api/admin/getCategoryById/' + id)
  }
}
