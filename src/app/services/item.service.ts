import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemPath = environment.apiUrl + '/items';
  constructor(private http: HttpClient) { 
  }

  create(data: any): Observable<Item>{
    return this.http.post<Item>(this.itemPath, data);
  }

  getItems(): Observable<Array<Item>>{
    return this.http.get<Array<Item>>(this.itemPath);
  }

  getItem(id: number): Observable<Item>{
    return this.http.get<Item>(this.itemPath+ '/' +id);
  }

  deleteItem(id: number): Observable<boolean>{//returns null, must change to 200OK
    return this.http.delete<boolean>(this.itemPath+ '/' +id);    
  }

  editItem(data: Item): Observable<boolean>{ //returns null, must change to 200OK
    return this.http.put<boolean>(this.itemPath,data);  
  }
}
