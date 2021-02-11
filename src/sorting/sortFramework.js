export const sortByRating = (array, gamesObj) => {
  let temp = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (gamesObj[array[j]].rating > gamesObj[array[i]].rating) {
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}