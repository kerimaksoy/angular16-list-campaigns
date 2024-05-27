import { Component } from '@angular/core';
import { Address } from '../interfaces/address.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '../services/address.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newcampaigns',
  templateUrl: './newcampaigns.component.html',
  styleUrls: ['./newcampaigns.component.scss']
})
export class NewcampaignsComponent {
  newCampaign: Address = { Id: 0, title: '', description: '', point: 0, date: new Date() };

  newCampaignForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    point: new FormControl(''),
    date: new FormControl('')
  });

  constructor(private router: Router, private addressService: AddressService, private toastr: ToastrService) {
  }

  createNewCampaign() {
    this.newCampaign.title = this.newCampaignForm.controls['title'].value as string;
    this.newCampaign.description = this.newCampaignForm.controls['description'].value as string;

    this.addressService.createCampaign(this.newCampaign);

    this.toastr.success('Campaign added successfully!', 'Success!', {
      timeOut: 2000,
    });
    //this.router.navigate(['/campaigns']);
  }
}
