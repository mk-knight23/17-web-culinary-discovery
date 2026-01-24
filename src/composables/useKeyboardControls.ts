import { ref, onMounted, onUnmounted } from 'vue';
import { useSettingsStore } from '../stores/settings';
import { KEYBOARD_SHORTCUTS } from '../utils/constants';

type KeyAction = 'save' | 'search' | 'close' | 'help' | 'none';

export function useKeyboardControls() {
  const settingsStore = useSettingsStore();
  const lastAction = ref<KeyAction>('none');

  const actionMap: Record<string, KeyAction> = {
    'KeyS': 'save',
    'KeyF': 'search',
    'Escape': 'close',
    'KeyH': 'help',
    '/': 'help',
    '?': 'help',
  };

  function handleKeyDown(e: KeyboardEvent): void {
    const action = actionMap[e.key] || 'none';

    if (e.ctrlKey || e.metaKey) {
      if (action === 'save' || action === 'search') {
        e.preventDefault();
        lastAction.value = action;
        return;
      }
    }

    if (action === 'close' && settingsStore.showHelp) {
      e.preventDefault();
      settingsStore.toggleHelp();
      lastAction.value = action;
      return;
    }

    if (action === 'help' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      settingsStore.toggleHelp();
      lastAction.value = action;
      return;
    }

    if (action !== 'none') {
      lastAction.value = action;
    }

    setTimeout(() => {
      lastAction.value = 'none';
    }, 100);
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });

  function getShortcuts() {
    return KEYBOARD_SHORTCUTS;
  }

  return {
    lastAction,
    getShortcuts,
  };
}
