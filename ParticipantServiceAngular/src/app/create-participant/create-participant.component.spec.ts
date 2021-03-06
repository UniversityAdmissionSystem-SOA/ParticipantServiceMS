import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipantComponent } from './create-participant.component';

describe('CreatePartcipantComponent', () => {
  let component: CreateParticipantComponent;
  let fixture: ComponentFixture<CreateParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
