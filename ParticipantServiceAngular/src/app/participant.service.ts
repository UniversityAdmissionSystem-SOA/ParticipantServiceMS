import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private baseUrl = 'http://localhost:8787/participant';
  get: any;

  constructor(private http: HttpClient) { }


  getAllParticipant(): Observable<any> {
    return this.http.get<any>("http://localhost:8787/participant/getallparticipants");
  }

  createParticipant(participant: Object): Observable<Object> {
    return this.http.post<any>("http://localhost:8787/participant/addnewparticipant",participant);
  }

  updateParticipant(applicationId: number, participant: Object): Observable<Object> {
    return this.http.put<any>("http://localhost:8787/participant/updateparticipant/"+applicationId,participant);
  }

  deleteParticipant(applicationId: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8787/participant/deleteparticipantbyid/"+applicationId);
  }

  getParticipantById(applicationId: number): Observable<any> {
    return this.http.get<any>("http://localhost:8787/participant/getparticipantbyapplicationid/"+applicationId);
  }
}
