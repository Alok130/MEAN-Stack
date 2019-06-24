import { TelegramService } from './../Service/telegram.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  productModel = new Product(0, 'Enter Item Name', 0);

  constructor(private service: TelegramService) {}

  ngOnInit() {}

  onSubmit() {
    alert(this.productModel);
    alert('Reached in Component');
    this.service.addOne(this.productModel).subscribe((res: any) => {
      alert(res);
    });
  }
}
