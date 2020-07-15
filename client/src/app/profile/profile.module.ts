import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profilepage/profilepage.component';



@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfilePageComponent]
})
export class ProfileModule { }
