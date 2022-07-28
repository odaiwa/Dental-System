import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RoleModel } from '../models/roles.model';

@Injectable({
  providedIn: 'root'
})

export class UserService{
  constructor(private http: HttpClient) { }

  public async getAllRolesAsync(): Promise<RoleModel[]> {
    //if (store.getState().productsState.products.length === 0) {
        const roles = await this.http.get<RoleModel[]>(environment.rolesUrl+'/roles').toPromise();
       // store.dispatch({ type: ProductsActionType.ProductsDownloaded, payload: products });
   // }
   return roles;
    //return store.getState().productsState.products;
}
}