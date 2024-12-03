<template>
  <div class="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
    <h1 class="text-2xl font-bold mb-4">Sort Numbers</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="numbersInput" class="block text-sm font-semibold text-gray-700">Enter Numbers (comma-separated)</label>
        <textarea
          id="numbersInput"
          v-model="numbersInput"
          placeholder="Enter numbers separated by commas"
          class="w-full p-3 mt-2 border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>
      <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
      <span v-if="errorMessage" class="text-red-600 text-sm mt-2 block">{{ errorMessage }}</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbersInput: '',
      errorMessage: '',
    };
  },
  methods: {
    submitForm() {
      this.errorMessage = '';
      if (!this.isValidInput()) {
        this.errorMessage = 'Please enter a valid list of numbers.';
        return;
      }

      const numbers = this.numbersInput
        .split(',')
        .map((num) => parseFloat(num.trim()))
        .filter((num) => !isNaN(num));

      this.$emit('submit', numbers);
    },
    isValidInput() {
      return /^(-?\d+(\.\d+)?\s*,\s*)*-?\d+(\.\d+)?$/.test(this.numbersInput);
    },
  },
};
</script>
