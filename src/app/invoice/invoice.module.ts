import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerListElementComponent } from "./components/customer-list/customer-list-element/customer-list-element.component";



@NgModule({
    declarations: [
        CustomerFormComponent,
        CustomerListComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        InvoiceRoutingModule,
        FormsModule,
        CustomerListElementComponent
    ]
})
export class InvoiceModule { }
