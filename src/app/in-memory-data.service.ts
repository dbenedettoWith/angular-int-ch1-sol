import { Product } from './models/product.models';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      { id: 'sksadere', name: 'Dr. Nice', inStock: true },
      { id: 'dadasd', name: 'Bombasto', inStock: true },
      { id: 'rtsds', name: 'Celeritas', inStock: true },
      { id: 'lklsdv', name: 'Magneta' , inStock: true},
      { id: 'eosum', name: 'RubberMan', inStock: true },
      { id: 'lorusm', name: 'Dynama', inStock: false },
      { id: 'loasdmr', name: 'Dr. IQ' , inStock: true},
      { id: 'epsomi', name: 'Magma', inStock: true },
      { id: 'ldot', name: 'Tornado', inStock: false }
    ];
    return {products};
  }
}
