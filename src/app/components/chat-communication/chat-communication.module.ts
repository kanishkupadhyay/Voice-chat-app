import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanishkVoiceCommunicationComponent } from './communication/communication.component';



@NgModule({
  declarations: [
    KanishkVoiceCommunicationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [KanishkVoiceCommunicationComponent]
})
export class ChatCommunicationModule { }
