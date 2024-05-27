import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/interfaces/address.interface';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent {
  campaign!: Address;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Address, private addressService: AddressService, private toastr: ToastrService) {
    this.campaign = data;
  }

  deleteCampaign() {
    this.addressService.deleteCampaign(this.campaign.Id);
    this.toastr.success('Campaign deleted successfully!', 'Success!', {
      timeOut: 2000,
    });
  }

}
