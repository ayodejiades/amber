"use client";

class AudioEngine {
  private static instance: AudioEngine;
  private synth: SpeechSynthesis | null = null;
  private enabled: boolean = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.synth = window.speechSynthesis;
    }
  }

  public static getInstance(): AudioEngine {
    if (!AudioEngineEngine.instance) {
      AudioEngineEngine.instance = new AudioEngine();
    }
    return AudioEngineEngine.instance;
  }

  public enable() {
    this.enabled = true;
    this.playPing(880, 0.1); // Initial "System Ready" ping
  }

  public announce(text: string) {
    if (!this.enabled || !this.synth) return;

    // Clear previous speech
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for professional "tactical" feel
    utterance.pitch = 0.8; // Lower pitch for authority
    
    // Attempt to find a "Premium" or "Natural" voice if available
    const voices = this.synth.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google UK English Female') || v.name.includes('Samantha'));
    if (preferredVoice) utterance.voice = preferredVoice;

    this.synth.speak(utterance);
  }

  public playPing(freq: number = 440, duration: number = 0.2) {
    if (!this.enabled || typeof window === 'undefined') return;

    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.error("Audio ping failed", e);
    }
  }
}

// Rename to match the singleton pattern internally
const AudioEngineEngine = AudioEngine;
export const audioEngine = typeof window !== 'undefined' ? AudioEngine.getInstance() : null;
