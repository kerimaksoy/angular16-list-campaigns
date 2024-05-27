import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/interfaces/address.interface';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss']
})
export class UpdatedialogComponent implements OnInit {
  campaign!: Address;

  updateForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    point: new FormControl(0),
    date: new FormControl('')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Address, private addressService: AddressService, private toastr: ToastrService) {
    this.campaign = data;
  }

  ngOnInit(): void {
    this.updateForm.controls['title'].setValue(this.campaign.title);
    this.updateForm.controls['description'].setValue(this.campaign.description);
    this.updateForm.controls['point'].setValue(this.campaign.point);
    this.updateForm.controls['point'].disable();
    this.updateForm.controls['date'].setValue(new Date(this.campaign.date).toLocaleDateString());
    this.updateForm.controls['date'].disable();
  }

  updateCampaign() {
    this.campaign.title = this.updateForm.controls['title'].value as string;
    this.campaign.description = this.updateForm.controls['description'].value as string;
    this.toastr.success('Campaign updated successfully!', 'Success!', {
      timeOut: 2000,
    });
    // this.campaign.Phone = this.updateForm.controls['phone'].value as string;
    // this.campaign.Address = this.updateForm.controls['address'].value as string;
    this.addressService.updateCampaign(this.campaign);
  }

}
