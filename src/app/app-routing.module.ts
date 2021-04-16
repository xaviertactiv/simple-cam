import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CameraComponent } from './components/camera/camera.component';
import { PostsComponent } from './components/post/posts/posts.component';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'camera', component: CameraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [CameraComponent, PostsComponent]
