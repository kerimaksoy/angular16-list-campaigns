import { Address } from './../interfaces/address.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() {
  }

  getCampaigns() {
    const localCampaigns = localStorage.getItem('campaing-list');
    if(localCampaigns != null) {
    const campaigns =  JSON.parse(localCampaigns);
    return campaigns;
    }
  }

  deleteCampaign(id: number) {
    const localCampaigns = localStorage.getItem('campaing-list');
    if(localCampaigns != null) {
      let campaigns =  JSON.parse(localCampaigns);
      campaigns = campaigns.filter((campaign: { Id: number; }) => campaign.Id !== id);
      localStorage.setItem('campaing-list', JSON.stringify(campaigns))
    }
  }

  updateCampaign(updatedCampaign: Address) {
    const localCampaigns = localStorage.getItem('campaing-list');
    if(localCampaigns != null) {
      let campaigns =  JSON.parse(localCampaigns);
      campaigns = campaigns.map((campaign: Address) => {
        if (campaign.Id === updatedCampaign.Id) {
          return { ...campaign, ...updatedCampaign };
        }
        return campaign;
      });
      localStorage.setItem('campaing-list', JSON.stringify(campaigns))
    }
  }

  createCampaign(campaign: Address) {
    const localCampaigns = localStorage.getItem('campaing-list');
    var highestId = 0;

    if(localCampaigns != null) {
      const users =  JSON.parse(localCampaigns);
      users.forEach((campaignObject: { Id: number; }) => {
        if (campaignObject.Id > highestId) {
          highestId = campaignObject.Id;
        }
      });
      campaign.Id = highestId + 1;
      users.push(campaign);
      localStorage.setItem('campaing-list', JSON.stringify(users))
    } else {
      const users = [];
      users.push(campaign);
      localStorage.setItem('campaing-list', JSON.stringify(users))
    }
  }
}


