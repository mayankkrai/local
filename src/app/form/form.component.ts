import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HostScreen } from '../hostlistener.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  projectName:string[]=[];
  i=0;

  time1:number;
 time2:number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form.value.workName);
    this.projectName[this.i++]=form.value.workName;
    localStorage.setItem('project',JSON.stringify(this.projectName)); 
    
      }
    


// onSubmitted() {
//   this.time1=this.hostscreen.task1;
//   this.time2=this.hostscreen.task2;
//   for(this.i=0;this.i<3;this.i++){
//     this.router.navigate(['work'], {relativeTo: this.route});
//   }
//  if((this.time1-this.time2)>=1) {
//    this.router.navigate(['frontpage'], {relativeTo: this.route});
//  }
//    if((this.time1-this.time2)>=2) {
    
//    }
//   if((this.time1-this.time2)!=4) {
//     this.router.navigate(['frontpage'], {relativeTo: this.route});
//   }
// }
}