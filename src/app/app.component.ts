import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'localtask';
  date:number;
  date1:number;
  task1:number;
  task2:number;
  gap:number;


  
  constructor(private router: Router,
            private route:ActivatedRoute){
     window.addEventListener('focus',()=>{
       this.date=new Date().getMinutes();
       console.log(this.date);
      localStorage.setItem('focus',JSON.stringify(this.date));
      this.task1=+localStorage.getItem('focus');
               this.task2=+localStorage.getItem('blur');
               this.gap=this.task1-this.task2;
              
               if((this.task1-this.task2)>=1){
                 alert('you came back after'+(this.task1-this.task2)+'minutes');
               this.router.navigate(['work'],{relativeTo:this.route});
              
               
               }
      });
     window.addEventListener('blur',()=>{
       this.date1=new Date().getMinutes();
              
          
               localStorage.setItem('blur',JSON.stringify(this.date1));})

  }
  



  ngOnInit(){
    
    

 }
//  @HostListener('window:focus', ['$event'])
//         onFocus(event: any): void {
//           this.date=new Date().getMinutes();
//         console.log(this.date);
//         localStorage.setItem('focus',JSON.stringify(this.date));
//        
//         }
//         }
    
//           @HostListener('window:blur', ['$event'])
//           onBlur(event: any): void {
//             
    
       
             
//         }
}
