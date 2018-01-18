import { ErrorComponent } from './shared/components/error/error.component';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule,PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root-reducer';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { PostsComponent } from './demo-container/posts/posts.component';
import { CoreModule } from './core/core.module';
import { Globals } from './shared/globals';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoContainerComponent,
    PostsComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
