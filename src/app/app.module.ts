import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './view/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { EmconstrucaoComponent } from './view/emconstrucao/emconstrucao.component';
import { HomeComponent } from './view/home/home.component';
import { NotfoundComponent } from './view/notfound/notfound.component';
import { ContatoComponent } from './view/contato/contato.component';
import { QuemSomosComponent } from './view/quem-somos/quem-somos.component';
import { LoginComponent } from './view/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EmconstrucaoComponent,
    HomeComponent,
    NotfoundComponent,
    ContatoComponent,
    QuemSomosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
