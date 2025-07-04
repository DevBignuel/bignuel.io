import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnDestroy {
  isAudioPlaying = false;
  private audioSub: Subscription;

  constructor(public audioService: AudioService, private cdr: ChangeDetectorRef) {
    this.audioSub = this.audioService.isPlaying$.subscribe(
      playing => {
        this.isAudioPlaying = playing;
        this.cdr.detectChanges();
      }
    );
  }

  toggleAudio() {
    if (this.audioService.isPlaying()) {
      this.audioService.pause();
    } else {
      this.audioService.play();
    }
  }

  ngOnDestroy() {
    this.audioSub.unsubscribe();
  }
}
