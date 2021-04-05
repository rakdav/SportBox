import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {StaticDataSource} from './static.datasource';
@Injectable()
export class ProductRepositiry{
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    // tslint:disable-next-line:no-unused-expression
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) === index).sort(); });
  }

  getProducts(category: string = null): Product[] {
    // tslint:disable-next-line:triple-equals
    return this.products.filter(p => category == null || category == p.category);
  }
  getProduct(id: number): Product {
    // tslint:disable-next-line:triple-equals
    return this.products.find(p => p.id == id);
  }
  getCategories(): string[] {
    return this.categories;
  }
}
