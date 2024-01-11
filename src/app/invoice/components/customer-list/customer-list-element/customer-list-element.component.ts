import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../../../classes/client';

@Component({
  selector: 'app-customer-list-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.scss'
})
export class CustomerListElementComponent {

  @Input()
  customer: Client = new Client();

  @Output()
  deletedCustomerEvent = new EventEmitter<Client>();

  onDeletedCustomer(customer: Client) {
    this.deletedCustomerEvent.emit(customer);
  }
}
