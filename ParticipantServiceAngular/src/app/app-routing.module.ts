import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { CreateParticipantComponent } from './create-participant/create-participant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'participants', component: ParticipantListComponent },
  { path: 'add', component: CreateParticipantComponent },
  { path: 'update/:applicationId', component: UpdateParticipantComponent },
  { path: 'details/:applicationId', component: ParticipantDetailsComponent },
  { path: 'list', component: ParticipantListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
