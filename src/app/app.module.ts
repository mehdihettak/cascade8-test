import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameInfoComponent } from './pages/game-info/game-info.component';
import { GameCreateComponent } from './pages/game-create/game-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule, MatCheckboxModule, MatDatepickerModule,
  MatRadioModule, MatSelectModule, MatInputModule, MatNativeDateModule
} from '@angular/material';
import { CartComponent } from './cart/cart.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { config } from 'process';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameInfoComponent,
    GameCreateComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
