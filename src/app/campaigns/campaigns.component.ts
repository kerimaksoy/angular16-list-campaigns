import { MatDialog } from '@angular/material/dialog';
import { AddressService } from '../services/address.service';
import { Component, OnInit } from '@angular/core';
import { DeletedialogComponent } from '../dialogs/deletedialog/deletedialog.component';
import { Address } from '../interfaces/address.interface';
import { MatTableDataSource } from '@angular/material/table';
import { UpdatedialogComponent } from '../dialogs/updatedialog/updatedialog.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  myDataArray: Address[] = [];

  dataSource = new MatTableDataSource<Address>();

  columnsToDisplay = ['title', 'description', 'point', 'date', 'Delete', 'Update'];

  constructor(public dialog: MatDialog, private addressService: AddressService) { }

  ngOnInit() {
    this.myDataArray = this.addressService.getCampaigns();
    this.dataSource = new MatTableDataSource<Address>(this.myDataArray);
  }

  deleteCampaign(campaignData: any) {

    let deleteDialogRef = this.dialog.open(DeletedialogComponent, {
      height: '320px',
      width: '400px',
      data: campaignData
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      //this.myDataArray = this.addressService.getCampaigns();
      this.dataSource.connect().next(this.myDataArray);
      this.myDataArray = this.addressService.getCampaigns();
      this.dataSource = new MatTableDataSource<Address>(this.myDataArray);
    });
  }

  updateCampaign(campaignData: any) {

    let updateDialogRef = this.dialog.open(UpdatedialogComponent, {
      height: '520px',
      width: '400px',
      data: campaignData
    });

    updateDialogRef.afterClosed().subscribe(result => {
      this.dataSource.connect().next(this.myDataArray);
    });
  }

  increasePoint(data: any) {
    data.point++;
    this.addressService.updateCampaign(data)
  }

  decreasePoint(data: any) {
    if(data.point >= 1)
    data.point--;

    this.addressService.updateCampaign(data)
  }

}
