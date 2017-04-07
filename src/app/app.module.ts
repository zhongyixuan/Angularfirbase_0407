import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Route */
import { RouterModule, Routes} from '@angular/router';
/* Route */


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'add-listing', component: AddListingComponent },
  { path: 'edit-listing/:id', component: EditListingComponent },
]


/* Firebase */
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from "app/services/firebase.service";
import { FlashMessagesModule } from "angular2-flash-messages/module";
/* Firebase */

export const firebaseConfig = {
   apiKey: "AIzaSyAAC8b-QvsFRToX6Zyob8I-PlT2etfa8HA",
    authDomain: "angular2-firebase-969f2.firebaseapp.com",
    databaseURL: "https://angular2-firebase-969f2.firebaseio.com",
    projectId: "angular2-firebase-969f2",
    storageBucket: "angular2-firebase-969f2.appspot.com",
    messagingSenderId: "34146499943"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    AddListingComponent,
    EditListingComponent,
    HomeComponent,
    ListingComponent,
    ListingsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
