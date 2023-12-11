import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useGenreStore = defineStore('genre', () => {
  const state = reactive({
    genres: [],
    currentGenreId: null,
  });

  const getCurrentGenreId = computed(() => state.currentGenreId);
  const setCurrentGenreId = (genreId) => {
    state.currentGenreId = genreId;
  };
  const getGenres = computed(() => state.genres);
  const getGenreName = (id) => {
    const genre = state.genres.find((genre) => genre.id === id);
    return genre ? genre.name : '';
  };

  const getAllGenres = async (type) => {
    try {
      const response = await api.get(`genre/${type}/list?language=pt-BR`);
      state.genres = response.data.genres;
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  return {
    getGenres,
    getAllGenres,
    getGenreName,
    getCurrentGenreId,
    setCurrentGenreId,
  };
});

export default useGenreStore;