import { defineStore } from 'pinia'
import axios from 'axios'
import type { RecipeState } from '@/types/recipe'

const API_BASE = import.meta.env.VITE_MEALDB_API_BASE || 'https://www.themealdb.com/api/json/v1/1'

export const useRecipeStore = defineStore('recipe', {
  state: (): RecipeState => ({
    recipes: [],
    categories: [],
    favorites: [],
    loading: false,
    selectedCategory: 'All',
    searchQuery: '',
  }),

  hydrate(state) {
    const saved = localStorage.getItem('recipe-favorites')
    if (saved) state.favorites = JSON.parse(saved)
  },

  actions: {
    async fetchCategories() {
      try {
        const { data } = await axios.get(`${API_BASE}/list.php?c=list`)
        this.categories = ['All', ...data.meals.map((c: any) => c.strCategory)]
      } catch {
        // Silently handle error
      }
    },

    async searchRecipes(query: string) {
      this.loading = true
      this.searchQuery = query
      try {
        const { data } = await axios.get(`${API_BASE}/search.php?s=${query}`)
        this.recipes = data.meals || []
      } catch {
        // Silently handle error
      } finally {
        this.loading = false
      }
    },

    async fetchByCategory(category: string) {
      if (category === 'All') return this.searchRecipes('')

      this.loading = true
      this.selectedCategory = category
      try {
        const { data } = await axios.get(`${API_BASE}/filter.php?c=${category}`)
        this.recipes = data.meals || []
      } catch {
        // Silently handle error
      } finally {
        this.loading = false
      }
    },

    toggleFavorite(id: string) {
      const index = this.favorites.indexOf(id)
      if (index > -1) {
        this.favorites = this.favorites.filter(favId => favId !== id)
      } else {
        this.favorites = [...this.favorites, id]
      }
      localStorage.setItem('recipe-favorites', JSON.stringify(this.favorites))
    }
  }
})
