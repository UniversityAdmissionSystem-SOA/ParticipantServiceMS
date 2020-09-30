import { ParticipantDetailsComponent } from '../participant-details/participant-details.component';
import { Observable } from "rxjs";
import { ParticipantService } from "../participant.service";
import { Participant } from "../participant";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-participant-list",
  templateUrl: "./participant-list.component.html",
  styleUrls: ["./participant-list.component.css"]
})
export class ParticipantListComponent implements OnInit {
  participants: Observable<Participant[]>;

  constructor(private participantService: ParticipantService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.participants = this.participantService.getAllParticipant();
  }

  deleteParticipant(applicationId: number) {
    this.participantService.deleteParticipant(applicationId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  participantDetails(applicationId: number){
    this.router.navigate(['details', applicationId]);
  }

  updateParticipant(applicationId: number){
    this.router.navigate(['update', applicationId]);
  }
}
