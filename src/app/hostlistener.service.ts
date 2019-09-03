import { HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export class HostScreen{

    date:number;
    data1:number;
    task1:number;
    task2:number;

    
    constructor(private router: Router,
        private route:ActivatedRoute){}

    @HostListener('window:focus', ['$event'])
    onFocus(event: any): void {
      this.date=new Date().getTime();
    console.log(this.date);
    localStorage.setItem('focus',JSON.stringify(this.date));
    this.task1=+localStorage.getItem('focus');
    this.task2=+localStorage.getItem('blur');
    
    if((this.task1-this.task2)>=1){
      alert('you came back after'+(this.task1-this.task2)+'minutes');
     this.router.navigate(['work'],{relativeTo:this.route});
    }
    }

      @HostListener('window:blur', ['$event'])
      onBlur(event: any): void {
        this.data1=new Date().getMinutes();
      console.log(typeof(this.date));

      localStorage.setItem('blur',JSON.stringify(this.data1));

   
         
    }

}