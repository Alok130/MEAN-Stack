import { Product } from './../Model/product.model';
import { TelegramService } from './../Service/telegram.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-items',
  templateUrl: './get-all-items.component.html',
  styleUrls: ['./get-all-items.component.css'],
  providers: [TelegramService]
})
export class GetAllItemsComponent implements OnInit {
  data: Product[];
  xyzAbc: any;
  x: any;
  y: any;
  public check = false;
  userModel = new Product(this.xyzAbc, this.x, this.y);
  constructor(private service: TelegramService) {}

  ngOnInit() {}

  Getall() {
    this.check = true;
    this.service.getlist().subscribe(res => {
      this.data = res;
      this.xyzAbc = res[0].itemId;
      this.x = res[0].itemName;
      this.y = res[0].itemPric;
      alert(this.xyzAbc);
    });
  }
}
