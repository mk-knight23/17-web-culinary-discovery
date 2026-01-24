import { ref } from 'vue';
import { useSettingsStore } from '../stores/settings';

let audioContext: AudioContext | null = null;

function initAudioContext(): void {
  if (!audioContext && typeof window !== 'undefined') {
    try {
      audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    } catch {
      console.warn('Audio context not supported');
    }
  }
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.3): void {
  if (!audioContext) return;

  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch {
    console.warn('Audio playback failed');
  }
}

export function useAudio() {
  const settingsStore = useSettingsStore();
  const initialized = ref(false);

  function ensureInitialized(): void {
    if (!initialized.value) {
      initAudioContext();
      initialized.value = true;
    }
  }

  function playClick(): void {
    if (!settingsStore.soundEnabled) return;
    ensureInitialized();
    playTone(800, 0.05, 'sine', 0.2);
  }

  function playHover(): void {
    if (!settingsStore.soundEnabled) return;
    ensureInitialized();
    playTone(600, 0.03, 'sine', 0.1);
  }

  function playSuccess(): void {
    if (!settingsStore.soundEnabled) return;
    ensureInitialized();
    playTone(523.25, 0.1, 'sine', 0.3);
    setTimeout(() => playTone(659.25, 0.1, 'sine', 0.3), 100);
    setTimeout(() => playTone(783.99, 0.15, 'sine', 0.3), 200);
  }

  function playError(): void {
    if (!settingsStore.soundEnabled) return;
    ensureInitialized();
    playTone(200, 0.2, 'sawtooth', 0.2);
  }

  return {
    playClick,
    playHover,
    playSuccess,
    playError,
  };
}
