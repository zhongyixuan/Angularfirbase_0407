import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: any;
  listing: any;
  imageUrl: any;

  constructor(
    private _firebaseService: FirebaseService,
    private _router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Get ID
    this.id = this.route.snapshot.params['id'];

    this._firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;

      console.log(listing);
      // @TODO - Storage Ref
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(listing.path);
      storageRef.child(listing.path).getDownloadURL().then((url) => {
        //Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }


  onDeleteClick(){
    this._firebaseService.deleteListing(this.id);
    this._router.navigate(['/listings']);
  }

}
