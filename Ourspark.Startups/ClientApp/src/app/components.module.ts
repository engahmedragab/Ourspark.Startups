import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartupsListComponent } from "./components/startups-list/startups-list.component";
import { StartupCardComponent } from "./components/startup-card/startup-card.component";
import { StartupLogoCardComponent } from "./components/startup-logo-card/startup-logo-card.component";
import { StatusIndicatorComponent } from "./components/status-indicator/status-indicator.component";
import { MatCardModule, MatDividerModule } from "@angular/material";
import { RouterModule } from '@angular/router';
import { LinksCardComponent } from './components/links-card/links-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { RateIndicatorComponent } from './components/rate-indicator/rate-indicator.component';
import { StartupAddComponent } from './components/management/startup-add/startup-add.component';
import { StartupEditComponent } from './components/management/startup-edit/startup-edit.component';
import { StartupDetailsComponent } from './components/management/startup-details/startup-details.component';

@NgModule({
  declarations: [
    StartupLogoCardComponent,
    StartupsListComponent,
    StartupCardComponent,
    StatusIndicatorComponent,
    LinksCardComponent,
    ReviewCardComponent,
    RateIndicatorComponent,
    StartupAddComponent,
    StartupEditComponent,
    StartupDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    StartupsListComponent,
    StartupCardComponent,
    StatusIndicatorComponent,
    LinksCardComponent,
    ReviewCardComponent,
    RateIndicatorComponent,
    RouterModule
  ],
})
export class ComponentsModule {}
