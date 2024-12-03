<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <SortForm @submit="handleSortSubmit" />
    <SortedNumbers :sorted-numbers="sortedNumbers" :error-message="errorMessage" />
  </div>
</template>

<script>
import SortForm from '~/components/SortForm.vue';
import SortedNumbers from '~/components/SortedNumbers.vue';
import { sortNumbers } from '~/services/api.js';

export default {
  components: {
    SortForm,
    SortedNumbers,
  },
  data() {
    return {
      sortedNumbers: [],
      errorMessage: '',
    };
  },
  methods: {
    async handleSortSubmit(numbers) {
      this.errorMessage = '';
      try {
        const result = await sortNumbers(numbers, this.$axios);
        this.sortedNumbers = result;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
