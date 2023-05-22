import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { DanhChoNamComponent } from './pages/danh-cho-nam/danh-cho-nam.component';
import { DanhChoNuComponent } from './pages/danh-cho-nu/danh-cho-nu.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LayoutClientComponent } from './components/layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DanhChoNamComponent,
    DanhChoNuComponent,
    NotFoundPageComponent,
    DashboardComponent,
    ProductsComponent,
    SidebarAdminComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    HeaderAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
