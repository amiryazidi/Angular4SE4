import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffreEmploisComponent } from './offre-emplois/offre-emplois.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'AddProduct', component:AddProductComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'home', component:HomeComponent},
  {path:'offres', component:OffreEmploisComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
