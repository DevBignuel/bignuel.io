import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'ldc';
  isAudioPlaying = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const audio = document.getElementById('background-audio') as HTMLAudioElement;
    if (audio) {
      audio.addEventListener('play', () => {
        this.isAudioPlaying = true;
        this.cdr.detectChanges();
      });
      audio.addEventListener('pause', () => {
        this.isAudioPlaying = false;
        this.cdr.detectChanges();
      });
      audio.addEventListener('ended', () => {
        this.isAudioPlaying = false;
        this.cdr.detectChanges();
      });
    }
  }

  toggleAudio() {
    const audio = document.getElementById('background-audio') as HTMLAudioElement;
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
}
