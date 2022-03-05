import { Component, OnInit } from '@angular/core';
import { closing, greetings, help, hobbies, intro, pizzas, thank } from '../data/message';
declare const webkitSpeechRecognition: any;
@Component({
  selector: 'kanishk-voice-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class KanishkVoiceCommunicationComponent implements OnInit {
  public speechRecognition: any = new webkitSpeechRecognition();
  public userMessageList: any[] = [];
  public ghostMessageList: any[] = [];
  public noMessage: boolean = true;

  ngOnInit(): void {
    this.speechRecognition.addEventListener('result', (e: any) => {
      const speech = new SpeechSynthesisUtterance();
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.noMessage = false
      this.userMessageList.push({ label: transcript });
      if (transcript.includes('who are you')) {
        let finalresult =
          intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
      }
      else if (transcript.includes('fine')) {
        let finalresult =
          help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
      }
     else  if (transcript.includes('how are you' || 'how are you doing today')) {
        let finalresult =
          greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
      }
     else if (
        transcript.includes(
          'tell me something about you' ||
          'tell me something about your hobbies'
        )
      ) {
        let finalresult =
          hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
      }
     else if (transcript.includes('pizza')) {
        let finalresult =
          pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
      }
     else  if (transcript.includes('thank you' || 'thank you so much')) {
        let finalresult =
          thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
      }
     else if (transcript.includes('talk to you' || 'talk')) {
        let finalresult =
          closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
      }
      else {
        speech.text = `'i did not get that`
      }
      this.ghostMessageList.push({ label: speech.text })
      window.speechSynthesis.speak(speech);
    });
  }

  onMicClick() {
    this.speechRecognition.start();
  }
}
