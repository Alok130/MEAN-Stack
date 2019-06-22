import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/product.model';

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
  getOne(no: number): any {
    const tempUrl = this.url + 'item/' + no;
    return this.http.get(tempUrl);
  }
}
