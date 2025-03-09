//app.routes
import { Routes } from '@angular/router';
import { teachersComponent } from './teachers/teachers.component';
import { studentsComponent } from './students/students.component';
import { subjectsComponent } from './subjects/subjects.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
export const routes: Routes = [
  { path: 'teachers', component: teachersComponent },
  { path: 'students', component: studentsComponent },
  { path: 'subjects', component: subjectsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'sidebar', component: SidebarComponent},
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
];