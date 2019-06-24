export class Product {
  itemNo: number;
  itemName: string;
  itemPrice: number;

  constructor(itemId: number, itemName: string, itemPrice: number) {
    this.itemNo = itemId;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
  }
}

/*
constructor(res: any) {
    this.itemId = res.itemNo;
    this.itemName = res.itemName;
    this.itemPric = res.itemPrice;
*/

// itemNo: number, itemName: string, itemPrice: number

/*
constructor(itemId: number, itemName: string, itemPric: number) {

  this.itemId = res.itemNo;
  this.itemName = res.itemName;
  this.itemPric = res.itemPrice;
  console.log(this.itemId);
  console.log(this.itemName);
*/
