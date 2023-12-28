import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.page.html',
  styleUrls: ['./all-contacts.page.scss'],
})
export class AllContactsPage {
  deleteContact(arg0: any) {
    throw new Error('Method not implemented.');
  }

  allContacts: any;
  add: any;


  constructor(private contact: ContactService, private loading: LoadingController) { }

  ngOnInit() {
    this.loadContacts();
  }

  async loadContacts() {

    const loading = await this.loading.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.contact.getContacts().subscribe(res => {
      loading.dismiss();
      this.allContacts = res;
    })
  }

  async deleteContacts(id: any) {

    const loading = await this.loading.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.contact.deleteContact(id).subscribe({
      next: (res) => {
        loading.dismiss();
        this.loadContacts();
      },
      error: console.log,
    });
  }


}
