import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, USE_DEVICE_LANGUAGE, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { GasolinerasFavListComponent } from './components/gasolineras-fav-list/gasolineras-fav-list.component';
import { GasolinerasListComponent } from './components/gasolineras-list/gasolineras-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';
import { ListasComponent } from './components/listas/listas.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogGasolineraDetailComponent } from './components/dialog-gasolinera-detail/dialog-gasolinera-detail.component';
import { DialogCreateListComponent } from './components/dialog-create-list/dialog-create-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GasolinerasFavListComponent,
    GasolinerasListComponent,
    ToolbarComponent,
    GasolineraItemComponent,
    ListasComponent,
    DialogGasolineraDetailComponent,
    DialogCreateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
