import { Product } from './../Model/product.model';
import { TelegramService } from './../Service/telegram.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-item-details',
  templateUrl: './all-item-details.component.html',
  styleUrls: ['./all-item-details.component.css']
})
export class AllItemDetailsComponent implements OnInit {
  updatedData = new Product(0, 'abc', 0.0);

  constructor(private service: TelegramService) {}

  ngOnInit() {}

  onUpdate() {
    this.service.updateItem(this.updatedData).subscribe((res: any) => {
      alert(res);
    });
  }
}
