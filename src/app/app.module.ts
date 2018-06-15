import { Http, ConnectionBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Rutas
import { routing, appRoutingProviders} from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent} from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
