import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Client } from '../../classes/client';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy{
[x: string]: any;

  customerList: Client[] = new Array<Client>;

  constructor(private customerService: CustomerService) { }

  deletedCustomer(customer: Client) {
    alert('removing customer with tax id: ' + customer.taxId);
    this.customerService.removeCustomer(customer);
  }

  ngOnDestroy(): void {
    console.log("zamykam komponent");
  }

  ngOnInit(): void {
    this.reloadCustomers();
    console.log(this.customerList);
  }

  reloadCustomers() {
    this.customerList = this.customerService.getCustomers();
  }
}
