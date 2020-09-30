import { ParticipantService } from '../participant.service';
import { Participant } from '../participant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-participant',
  templateUrl: './create-participant.component.html',
  styleUrls: ['./create-participant.component.css']
})
export class CreateParticipantComponent implements OnInit {

  participant: Participant = new Participant();
  submitted = false;

  constructor(private participantService: ParticipantService,
    private router: Router) { }

  ngOnInit() {
  }

  newParticipant(): void {
    this.submitted = false;
    this.participant = new Participant();
  }

  save() {
    this.participantService.createParticipant(this.participant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.participant = new Participant();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/participants']);
  }
}
