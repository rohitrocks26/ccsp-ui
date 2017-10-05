import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule,PreloadAllModules} from '@angular/router';


import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';


import { GlobalService, AuthenticationService } from './common';
import { SampleTestingComponent } from './common/components/sample-testing/sample-testing.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleTestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES,
    { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ 
    GlobalService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
