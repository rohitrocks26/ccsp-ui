import { ErrorComponent } from './shared/components/error/error.component';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root-reducer';
import { CoreModule } from './core/core.module';
import { GlobalConstants } from './shared/globalconstants';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutes,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [GlobalConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
