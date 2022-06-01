import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampComponent } from './champ/champ.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserComponent
  // },
  // {
  //   path: 'champ',
  //   // component: ChampComponent,
  //   // Nếu có children mà có thuộc tính component thì trong component sẽ phải có router-outlet
  //   // Nếu không nó sẽ ăn theo router-outlet trong app.component.html
  //   children: [
  //     {
  //       path: 'index',
  //       component: UserComponent
  //     }
  //   ]
  // },
  {
    path: '',
    component: ClientLayoutComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailClientComponent
  },
  {
    path: 'about',
    component: AboutClientComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
