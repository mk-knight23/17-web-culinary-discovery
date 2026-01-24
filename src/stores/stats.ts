import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Stats {
  totalSearches: number;
  totalRecipesViewed: number;
  totalFavorites: number;
  lastVisit: string | null;
  totalTimeSpent: number;
}

const STORAGE_KEY = 'culinara-stats';

const defaultStats: Stats = {
  totalSearches: 0,
  totalRecipesViewed: 0,
  totalFavorites: 0,
  lastVisit: null,
  totalTimeSpent: 0,
};

function loadStats(): Stats {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultStats, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.warn('Failed to load stats');
  }
  return defaultStats;
}

export const useStatsStore = defineStore('stats', () => {
  const savedStats = loadStats();
  const totalSearches = ref(savedStats.totalSearches);
  const totalRecipesViewed = ref(savedStats.totalRecipesViewed);
  const totalFavorites = ref(savedStats.totalFavorites);
  const lastVisit = ref<string | null>(savedStats.lastVisit);
  const totalTimeSpent = ref(savedStats.totalTimeSpent);

  function recordSearch(): void {
    totalSearches.value++;
    lastVisit.value = new Date().toISOString();
    saveStats();
  }

  function recordRecipeView(): void {
    totalRecipesViewed.value++;
    saveStats();
  }

  function updateFavorites(count: number): void {
    totalFavorites.value = count;
    saveStats();
  }

  function addTimeSpent(seconds: number): void {
    totalTimeSpent.value += seconds;
    saveStats();
  }

  function resetStats(): void {
    totalSearches.value = 0;
    totalRecipesViewed.value = 0;
    totalFavorites.value = 0;
    lastVisit.value = null;
    totalTimeSpent.value = 0;
    saveStats();
  }

  function formatTime(): string {
    const seconds = totalTimeSpent.value;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  }

  function saveStats(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        totalSearches: totalSearches.value,
        totalRecipesViewed: totalRecipesViewed.value,
        totalFavorites: totalFavorites.value,
        lastVisit: lastVisit.value,
        totalTimeSpent: totalTimeSpent.value,
      }));
    } catch (e) {
      console.warn('Failed to save stats');
    }
  }

  return {
    totalSearches,
    totalRecipesViewed,
    totalFavorites,
    lastVisit,
    totalTimeSpent,
    recordSearch,
    recordRecipeView,
    updateFavorites,
    addTimeSpent,
    resetStats,
    formatTime,
  };
});
