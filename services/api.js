export const sortNumbers = async (numbers, $axios) => {
  try {
    const response = await $axios.post('/sort', { numbers })
    return response.data.sortedNumbers
  } catch (error) {
    throw new Error('Error occurred while sorting the numbers.')
  }
}
