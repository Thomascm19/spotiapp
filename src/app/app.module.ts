import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Se importa para realizar las peticiones HTTP
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

// Importar rutas
import { ROUTES } from './app.routes';

// Importar componente
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
