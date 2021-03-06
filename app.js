let arr = [91, 22, 29, 55, 16, 10, 66, 20, 38, 15, 47, 38,
  21, 48, 73, 29, 47, 41, 27, 26, 4, 54, 81, 45,
  1, 77, 35, 84, 1, 18, 70, 93, 94, 6, 85, 40,
  60, 78, 47, 1, 2, 55, 77, 27, 55, 83, 54, 45,
  13, 18, 21, 51, 27, 18, 34, 86, 88, 24, 39, 71,
  46, 29, 2, 41, 1, 8, 79, 27, 74, 77, 74, 5,
  41, 97, 89, 80, 42, 41, 78, 28, 60, 83, 0, 4,
  98, 70, 9, 10, 50, 39, 61, 42, 14, 44, 66, 53,
  61, 12, 33, 86]


const selectionSort = () => {
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (i !== min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

// console.log(selectionSort())

const insertionSort = () => {
  for (let i = 0; i < arr.length; i++) {
    let j
    let current = arr[i]

    for (j = i - 1; j > -1 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = current
  }

  return arr
}

console.log(insertionSort())
