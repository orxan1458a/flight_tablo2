import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Aviation } from './Aviation';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title //   });
    (title: any) {
      throw new Error('Method not implemented.');
  }
  flightNumber:any;
  
  public DataList: Aviation[] = [];
  departureStyle=true;
  arrivalStyle=false;

  Departure():void{
    this.departureStyle=true;
    this.arrivalStyle=false;
  }
  Arrival():void{
    this.departureStyle=false;
    this.arrivalStyle=true;
  }

  constructor(private service: DataserviceService) {
    this.service.getDatas().subscribe((res: any) => {
      console.log(res);
      this.DataList = res.data;
     
    }); 

  }
  ngOnInit(): void {
    
  }

//   currentPosition = window;
// @HostListener('window:scroll', ['$event.target']) // for window scroll events
// scroll(e:any) {
  
//   let scroll = e.scrollingElement.scrollTop;
  
//   console.log("this is the scroll position", scroll)
//   if (scroll>20) {
    
//     console.log("scrollDown");
//     (<HTMLInputElement>document.getElementById("header")).classList.toggle("blackk"); 

//   } else {
//     (<HTMLInputElement>document.getElementById("header")).classList.remove("blackk"); 

//     console.log("scrollUp");
//   }this.currentPosition=scroll;
  
// }

  // getTodo(userId:string)
  // {
  //   this.service.getTodo(userId).subscribe(res=>{
  //     this.TodoList=res;
  //   });
  // }
  // addTodo()
  // {
  //   let dt:Todo={id:0,userId:10,title:'New  Todo',completed:true};

  // this.service.AddTodo(dt).subscribe(res=>{
  //   dt.id=res['id'];
  //   this.TodoList.splice(0,0,dt);

  //   });
  // }

  // updateTodo(item:Todo,_title:string)
  // {
  //   item.title=_title;
  //   this.service.updateTodo(item).subscribe(res=>{
  //     console.log('Update');

  //   });
  // }

  // deleteTodo(item:Todo)
  // {
  //   this.service.deleteTodo(item).subscribe(res=>{
  //     let index=this.TodoList.indexOf(item);
  //     this.TodoList.splice(index,1);
  //   })
  // }
}
