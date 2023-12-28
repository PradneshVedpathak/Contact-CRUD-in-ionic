import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get("https://careful-wasp-tunic.cyclic.app/getContact")
  }

  addContact(data: any): Observable<any> {
    return this.http.post("https://careful-wasp-tunic.cyclic.app/addContact", data)
  }

  deleteContact(id: any): Observable<any> {
    return this.http.delete(`https://careful-wasp-tunic.cyclic.app/deleteContact/${id}`)
  }

  getContact(id: any): Observable<any> {
    return this.http.get(`https://careful-wasp-tunic.cyclic.app/getSingleContact/${id}`)
  }

  updateContact(updateData: any): Observable<any> {
    return this.http.patch(`https://careful-wasp-tunic.cyclic.app/updateContact/${updateData._id}`, updateData)
  }
}
