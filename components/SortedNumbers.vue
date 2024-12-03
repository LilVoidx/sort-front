<template>
  <div class="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
    <div v-if="sortedNumbers.length > 0">
      <h2 class="text-xl font-semibold">Sorted Numbers:</h2>
      <p class="text-lg">
        <span v-for="(num, index) in sortedNumbers" :key="index">{{ num }}<span v-if="index < sortedNumbers.length - 1">, </span></span>
      </p>
    </div>
    <div v-if="errorMessage" class="mt-4">
      <p class="text-red-600">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sortedNumbers: {
      type: Array,
      default: () => [],
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
};
</script>
