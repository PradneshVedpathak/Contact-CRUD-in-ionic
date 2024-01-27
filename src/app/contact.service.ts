import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get("https://proud-pear-bonobo.cyclic.app/allContacts")
  }

  addContact(data: any): Observable<any> {
    return this.http.post("https://proud-pear-bonobo.cyclic.app/addContact", data)
  }

  deleteContact(id: any): Observable<any> {
    return this.http.delete(`https://proud-pear-bonobo.cyclic.app/removeContact/${id}`)
  }

  getContact(id: any): Observable<any> {
    return this.http.get(`https://proud-pear-bonobo.cyclic.app/contact/${id}`)
  }

  updateContact(updateData: any): Observable<any> {
    return this.http.patch(`https://proud-pear-bonobo.cyclic.app/updateContact/${updateData._id}`, updateData)
  }
}
