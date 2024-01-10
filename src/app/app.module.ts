import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service'; // Adjust the path as necessary

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
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
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    PostDetailsComponent,
    CreatePostComponent,
    ProfileComponent,
    EditProfileComponent,
    MessagesComponent,
    ConversationComponent,
    NewMessageComponent,
    NotificationsComponent,
    ConnectionRequestsComponent,
    MyConnectionsComponent,
    DemandesComponent,
    CasesComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
