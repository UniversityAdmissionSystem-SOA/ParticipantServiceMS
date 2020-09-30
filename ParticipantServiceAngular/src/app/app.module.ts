import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateParticipantComponent } from './create-participant/create-participant.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateParticipantComponent,
    ParticipantDetailsComponent,
    ParticipantListComponent,
    UpdateParticipantComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
