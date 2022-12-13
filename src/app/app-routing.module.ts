import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './createitem/createitem.component';
import { DetailsItemsComponent as DetailsItemComponent } from './details-items/details-items.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthGuardService } from './services/auth.guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateItemComponent, canActivate: [AuthGuardService]},
  { path: 'items', component: ListItemsComponent, canActivate: [AuthGuardService] },
  { path: 'items/:id', component: DetailsItemComponent, canActivate: [AuthGuardService] },
  { path: 'items/:id/edit', component: EditItemComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
