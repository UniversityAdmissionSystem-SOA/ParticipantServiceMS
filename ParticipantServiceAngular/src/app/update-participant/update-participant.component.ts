import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {

  applicationId: number;
  participant: Participant;

  constructor(private route: ActivatedRoute,private router: Router,
    private participantService: ParticipantService) { }

  ngOnInit() {
    this.participant = new Participant();

    this.applicationId = this.route.snapshot.params['applicationId'];
    
    this.participantService.getParticipantById(this.applicationId)
      .subscribe(data => {
        console.log(data)
        this.participant = data;
      }, error => console.log(error));
  }

  updateParticipant() {
    this.participantService.updateParticipant(this.applicationId, this.participant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.participant = new Participant();
    this.gotoList();
  }

  onSubmit() {
    this.updateParticipant();    
  }

  gotoList() {
    this.router.navigate(['/participants']);
  }
}
