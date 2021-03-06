import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTutorialComponent } from "./components/add-tutorial/add-tutorial.component";
import { BoardAdminComponent } from "./components/board-admin/board-admin.component";
import { BoardModeratorComponent } from "./components/board-moderator/board-moderator.component";
import { BoardUserComponent } from "./components/board-user/board-user.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RegisterComponent } from "./components/register/register.component";
import { TutorialDetailsComponent } from "./components/tutorial-details/tutorial-details.component";
import { TutorialsListComponent } from "./components/tutorials-list/tutorials-list.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "user", component: BoardUserComponent },
  { path: "mod", component: BoardModeratorComponent },
  { path: "admin", component: BoardAdminComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "tutorials", component: TutorialsListComponent },
  { path: "tutorials/:id", component: TutorialDetailsComponent },
  { path: "add", component: AddTutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
