import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: 'home-component', component: HomeComponent },

  { path: 'categories-component', component: CategoriesComponent},

  { path: 'contact-component', component: ContactComponent},

  { path: 'login-component', component: LoginComponent},

  {path: 'register-component', component: RegisterComponent},

  { path: 'book-component', component: BookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
