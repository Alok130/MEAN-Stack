import { Product } from './../Model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private url = 'http://localhost:3001/';
  constructor(private http: HttpClient) {}

  // GET All Item Details
  getlist(): Observable<Product[]> {
    const tempUrl = this.url + 'allItems';
    return this.http.get<Product[]>(tempUrl);
  }

  // GET Item Details By Id
  getOne(no: number): Observable<Product[]> {
    const tempUrl = this.url + 'item/' + no;
    return this.http.get<Product[]>(tempUrl);
  }

  // Add Item To DataBase
  addOne(obj: Product): any {
    const tempUrl = this.url + 'additem';
    console.log(tempUrl);
    console.log('Reached in Service');
    console.log(obj);
    return this.http.post<any>(tempUrl, obj);
  }

  // Update Iten in DataBase
  updateItem(obj: Product): any {
    const tempUrl = this.url + 'update';
    return this.http.put<any>(tempUrl, obj);
  }
}
