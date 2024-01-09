import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileComponent } from './profil/profil.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MessagesComponent } from './messages/messages.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConnectionRequestsComponent } from './connection-requests/connection-requests.component';
import { MyConnectionsComponent } from './my-connections/my-connections.component';
import { DemandesComponent } from './demandes/demandes.component';
import { CasesComponent } from './cases/cases.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'home', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'new-message', component: NewMessageComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'connection-request', component: ConnectionRequestsComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'demandes', component: DemandesComponent },
  { path: 'my-connections', component: MyConnectionsComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'conversation/:id', component: ConversationComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
