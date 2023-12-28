/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  firstName: any
  lastName: any
  phoneNumber: any
  constructor(private contact: ContactService, private loading: LoadingController, private router: Router) { }

  ngOnInit() {

  }

  async addContact() {
    const loading = await this.loading.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.contact.addContact({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
    }).subscribe({

      next: (res) => {
        loading.dismiss();
        this.router.navigateByUrl('/all-contacts')
      },
      error: () => {
        loading.dismiss();
        alert("Something went wrong!!!");
      }
    })
  }
}
