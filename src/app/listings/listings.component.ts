import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings: any;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
    })
  }

}

