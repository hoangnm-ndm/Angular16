import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DanhChoNamComponent } from './pages/danh-cho-nam/danh-cho-nam.component';
import { DanhChoNuComponent } from './pages/danh-cho-nu/danh-cho-nu.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LayoutClientComponent } from './components/layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';

const routes: Routes = [
  // Routing cho Clients
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'danh-cho-nam', component: DanhChoNamComponent },
      { path: 'danh-cho-nu', component: DanhChoNuComponent },
    ],
  },

  // Routing cho Admin
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },

  // NotfoundPage
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
