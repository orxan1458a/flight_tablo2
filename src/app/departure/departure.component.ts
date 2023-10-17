import { Component, Input, OnInit } from '@angular/core';
import { Aviation } from '../Aviation';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent implements OnInit {

  isLoading:boolean=false;
  flightNumber:any;
  airlineName:any;
  p:number=1;
  DataList: Aviation[] = [];
  flight: {number: number, iata: any, icao: any} = {number: 0, iata: 2, icao: 2};


  constructor(private service: DataserviceService) {
    
  }
  ngOnInit(): void {
    this.isLoading=true;
    this.service.getDatas().subscribe((res: any) => {
    
      console.log(res);
      this.DataList = res.data;
      this.isLoading=false;
      });
    // throw new Error('Method not implemented.');

  }

  getFlightNumber():any{
    if(this.flightNumber==""){
      this.ngOnInit();
    }else{

    
    this.service.getFlightNumber(this.flightNumber).subscribe((sorgu1:any)=>{
      this.DataList=sorgu1.data;
      console.log(sorgu1);
    })
  }
}
  getAirlineName():any{
    if(this.airlineName==""){
      this.ngOnInit();
    }else{
    this.service.getAirlineName(this.airlineName).subscribe((sorgu2:any)=>{
      this.DataList=sorgu2.data;
      console.log(sorgu2)
    })
  }
  }
  togglePopup(flight:any):any{
    this.flight=flight;
    (<HTMLInputElement>document.getElementById("popup-1")).classList.toggle("active"); 
    
            
  }
  removePopup():any{
    (<HTMLInputElement>document.getElementById("popup-1")).classList.remove("active");
            
  }
  delete(id:any){
    // this.DataList.slice(id,1);
    this.DataList=this.DataList.splice(id,1)
  }
}
