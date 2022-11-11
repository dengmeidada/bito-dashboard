import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { BasicInformationComponent } from './billed-cases/basic-information/basic-information.component';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [BasicInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
    PageRoutingModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    DialogModule,
  ],
})
export class PageModule {}
