import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.page.html',
  styleUrls: ['./update-contact.page.scss'],
})
export class UpdateContactPage implements OnInit {
  firstName: any
  lastName: any
  phoneNumber: any
  id: any

  constructor(private activatedRoute: ActivatedRoute, private contact: ContactService, private loading: LoadingController, private router: Router) { }

  ngOnInit() {
    this.showContactInfo()
  }

  async showContactInfo() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    const loading = await this.loading.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.contact.getContact(this.id).subscribe(res => {
      loading.dismiss();
      JSON.stringify(res);

      this.firstName = res.firstName
      this.lastName = res.lastName
      this.phoneNumber = res.phoneNumber
    })
  }


  async updateContact() {
    const loading = await this.loading.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.contact.updateContact({
      _id: this.id,
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
