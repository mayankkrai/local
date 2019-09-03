import { NgModule } from '@angular/core';
import{ Routes,RouterModule} from '@angular/router';
import { WorkComponent } from './work/work.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FormComponent } from './form/form.component';
const appRoutes:Routes=[
    {path:'',redirectTo:'/frontpage',pathMatch:'full'},
    {path:'frontpage',component:FrontpageComponent},
    {path:'work',component:WorkComponent},
    {path:'form',component:FormComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class Routing{

}