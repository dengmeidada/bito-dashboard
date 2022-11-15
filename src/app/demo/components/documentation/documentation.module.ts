import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { AppCodeModule } from '../code/code.component';
import { DocumentationComponent } from './documentation.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AppCodeModule,
    DocumentationRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  declarations: [DocumentationComponent],
})
export class DocumentationModule {}
