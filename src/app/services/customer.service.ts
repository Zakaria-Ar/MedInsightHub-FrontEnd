import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);

  }
  viewCustomer(id: any){

  }
  editCustomer(id: any, _customerObj: any){

  }
  deleteCustomer(id: any){

  }
  searchCustomer(keyword: any){

  }

}
