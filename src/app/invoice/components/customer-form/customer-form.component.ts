import { Component } from '@angular/core';
import { Client } from '../../classes/client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
client: Client = new Client();
name='';
  onSubmit(f: NgForm) {
    console.log(this.client)
  }
}
