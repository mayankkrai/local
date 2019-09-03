import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  projectName:string[]=[];
  i=0;
  j:number;

  time1:number;
 time2:number;
 gap:number;

  constructor(private router: Router, private route: ActivatedRoute,
    private formd:AppComponent) { }

  ngOnInit() {
    this.time1=this.formd.task1;
    this.time2=this.formd.task2;
    this.gap=this.formd.gap;
  }
  onSubmit(form:NgForm){
    console.log(form.value.workName);
    this.projectName[this.i++]=form.value.workName;
    localStorage.setItem('project',JSON.stringify(this.projectName)); 
    
    
    
    
      
    }
    


 onSubmitted() {
   for(this.j=0;this.j<this.gap;this.j++){
     this.router.navigate(['work']);
   }
}
    }