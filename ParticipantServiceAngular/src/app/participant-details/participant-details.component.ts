import { Participant } from '../participant';
import { Component, OnInit, Input } from '@angular/core';
import { ParticipantService } from '../participant.service';
import { ParticipantListComponent } from '../participant-list/participant-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['participants']);
  }
}
