import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DataServicesRoutingModule } from './data-services-routing.module';
import {
  DataServicesComponent,
  AlertComponent,
  OfficialComponent
} from './data-services.component';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { SdsDialogModule, SdsSearchModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DataServicesRoutingModule,
    SdsSubheaderModule,
    SdsDialogModule,
    SdsSearchModule
  ],
  declarations: [DataServicesComponent, AlertComponent, OfficialComponent],
  exports: [DataServicesComponent],
  entryComponents: [AlertComponent, OfficialComponent]
})
export class DataServicesModule {}
