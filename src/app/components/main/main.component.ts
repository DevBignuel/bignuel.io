import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;
  isAudioPlaying = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const audio = this.audioPlayer.nativeElement;
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

  toggleAudio() {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    // isAudioPlaying sera mis à jour automatiquement par les listeners
  }
}
