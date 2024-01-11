import { Component } from '@angular/core';
import { Client } from '../../classes/client';
import { FormGroup, NgForm } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  client: Client = new Client();

  constructor (private customerService: CustomerService, private router: Router) { }


  onSubmit(f: NgForm) {

    if (f.invalid) {
      console.log("invalid form")
      return;
    }

    console.log(this.client)
    this.customerService.addCustomer(this.client);
    this.router.navigate(['/invoice/customer-list'])
  }
}

  

