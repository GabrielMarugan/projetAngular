import { FormUpComponent } from './form-up/form-up.component';
import { FormInComponent } from './form-in/form-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: FormInComponent},
  { path: "signIn", component: FormInComponent },
  {path: "signUp", component: FormUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
