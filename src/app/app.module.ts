import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { ConcentradoComponent } from './concentrado/concentrado.component';
import { ComidaHumedaComponent } from './comida-humeda/comida-humeda.component';
import { ArticulosPaseoComponent } from './articulos-paseo/articulos-paseo.component';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { AuxiliarAlimentosComponent } from './auxiliar-alimentos/auxiliar-alimentos.component';

const routes: Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'alimentos',
    component:AlimentosComponent,
    children:[
      {
        path:'',
        component:AuxiliarAlimentosComponent
      },
      {
        path:'comidaHumeda',
        component:ComidaHumedaComponent
      },
      {
        path:'concentrado',
        component:ConcentradoComponent
      },
    ]
  },  
  {
    path:'accesorios',
    component:AccesoriosComponent,
    children:[
      {
        path:'articulosPaseo',
        component:ArticulosPaseoComponent
      },
      {
        path:'juguetes',
        component:JuguetesComponent
      },
    ]
  },  
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:ErrorPaginaComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorPaginaComponent,
    AlimentosComponent,
    AccesoriosComponent,
    ConcentradoComponent,
    ComidaHumedaComponent,
    ArticulosPaseoComponent,
    JuguetesComponent,
    AuxiliarAlimentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
