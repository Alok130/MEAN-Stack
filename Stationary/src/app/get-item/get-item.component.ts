import { Component, OnInit } from '@angular/core';
import { TelegramService } from '../Service/telegram.service';
import { Product } from '../Model/product.model';

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.css'],
  providers: [TelegramService]
})
export class GetItemComponent implements OnInit {
  check = false;
  itemNo: any = 0;
  allItem: any;
  data: Product[];
  xyzAbc: string;
  constructor(private service: TelegramService) {}

  ngOnInit() {}

  GetOne() {
    this.check = true;

    this.check = true;
    this.service.getOne(this.itemNo).subscribe(res => {
      // this.data = res;
      this.xyzAbc = res[0].itemName;
      alert(this.xyzAbc);
    });
    /*
    this.service.getOne(this.itemNo).subscribe((res: any) => {
      if (res === 0) {
        alert('Sorry!! please enter correct Item_Id');
        return;
      }

      this.allItem = res[0];
    });
  }
  item_no(itemNo: any) {
    throw new Error('Method not implemented.');
  }*/
  }
}
