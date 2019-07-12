import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { ContentsComponent } from './template/contents/contents.component';
import { StudentsComponent } from './template/contents/students/students.component';
import { TemplateModule } from './template/template.module';
import { HeaderComponent } from './template/header/header.component';
import { MaterialModule } from './material.module';
import { SimplePopUpComponent } from './template/layout/simple-pop-up/simple-pop-up.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentsComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    TemplateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[SimplePopUpComponent]
})
export class AppModule {

  constructor(){
    library.add(faCoffee,faUser);

  }
 }
