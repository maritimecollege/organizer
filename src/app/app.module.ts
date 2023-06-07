import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SelectorComponent } from './components/selector/selector.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { MomentPipe } from './shared/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { ClassComponent } from './components/class/class.component';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './components/student/student.component';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './components/students/students.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ClassViewComponent } from './components/class-view/class-view.component';
import { ClassesComponent } from './components/classes/classes.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe,
    HeaderComponent,
    ClassComponent,
    StudentComponent,
    StudentsComponent,
    StudentViewComponent,
    ClassViewComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    AppRoutingModule,
    CalendarModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    DropdownModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
