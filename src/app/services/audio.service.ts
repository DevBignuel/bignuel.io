import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;
  private playingSubject = new BehaviorSubject<boolean>(false);
  public isPlaying$ = this.playingSubject.asObservable();

  constructor() {
    this.audio = new Audio('assets/audio/nabo.mp4');
    this.audio.loop = true;

    this.audio.addEventListener('play', () => this.playingSubject.next(true));
    this.audio.addEventListener('pause', () => this.playingSubject.next(false));
    this.audio.addEventListener('ended', () => this.playingSubject.next(false));
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }
}
