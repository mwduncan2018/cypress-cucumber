export class Product {
  manufacturer: string;
  model: string;
  price: number;
  numberInStock: number;

  constructor(manufacturer: string, model: string, price: number, numberInStock: number) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.price = price;
    this.numberInStock = numberInStock;
  }
}