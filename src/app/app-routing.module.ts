import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalComponent } from './arrival/arrival.component';
import { DepartureComponent } from './departure/departure.component';

const routes: Routes = []=[
{path:'departure',component:DepartureComponent},
{path:'arrival',component:ArrivalComponent},
{path:'',component:DepartureComponent}

]

@NgModule({
  declarations:[],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
