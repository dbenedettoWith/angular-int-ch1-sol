import { Product } from './../models/product.models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataRetrieverService } from '../services/data-retriever.service';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;
  products: Product[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataRetrieverService) { }
  
  ngOnInit(): void {
    this.getProducts();
    this.getProductsSubscription();
  }

  getProducts(): void {
    this.products$ = this.dataService.getProducts()
    .pipe(
      map(products => { 
       return products.map(product =>  {return {...product, available: product.inStock}})
      }))
  }

  getProductsSubscription(): void {
    this.dataService.getProducts()
    .pipe(
     takeUntil(this.destroy$),
      tap(products => { 
        const tempArray = products.map(product =>  {return {...product,  available: product.inStock}});
        this.products = tempArray;

      })).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
