import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { Erro404Component } from './core/component/Erro-404/erro-404.component';

@NgModule({
  declarations: [
    AppComponent,
    Erro404Component
  ],
  imports: [    
    BrowserModule,    
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([     
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path:'**', component:Erro404Component
      }   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
