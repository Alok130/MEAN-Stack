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

  constructor(private service: TelegramService) {}

  ngOnInit() {}

  Getall() {
    this.service.getlist().subscribe(res => {
      this.data = res;
    });
  }
}
