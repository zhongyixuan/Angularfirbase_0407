import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';


@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  foler: any;


  constructor(private _af: AngularFire) {
    this.foler = "listingImages";
    this.listings = this._af.database.list('/listings') as FirebaseListObservable<Listing[]>
  }

  getListings() {
    return this.listings;
  }

  getListingDetails(id) {
    this.listing = this._af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  addListing(listing) {
    // Create root ref
    let storageRef = firebase.storage().ref();
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.foler}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }


  updateListing(id, listing) {
    return this.listings.update(id, listing);
  }

  deleteListing(id) {
    return this.listings.remove(id);
  }

}


interface Listing {
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
}
