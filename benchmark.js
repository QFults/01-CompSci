const Benchmark = require('benchmark')

let arr = [91, 22, 29, 55, 16, 10, 66, 20, 38, 15, 47, 38,
  21, 48, 73, 29, 47, 41, 27, 26, 4, 54, 81, 45,
  1, 77, 35, 84, 1, 18, 70, 93, 94, 6, 85, 40,
  60, 78, 47, 1, 2, 55, 77, 27, 55, 83, 54, 45,
  13, 18, 21, 51, 27, 18, 34, 86, 88, 24, 39, 71,
  46, 29, 2, 41, 1, 8, 79, 27, 74, 77, 74, 5,
  41, 97, 89, 80, 42, 41, 78, 28, 60, 83, 0, 4,
  98, 70, 9, 10, 50, 39, 61, 42, 14, 44, 66, 53,
  61, 12, 33, 86]

let arr1 = [0, 1, 1, 1, 1, 2, 2, 4, 4, 5, 6, 8,
  9, 10, 10, 12, 13, 14, 15, 16, 18, 18, 18, 20,
  21, 21, 22, 24, 26, 27, 27, 27, 27, 28, 29, 29,
  29, 33, 34, 35, 38, 38, 39, 39, 40, 41, 41, 41,
  41, 42, 42, 44, 45, 45, 46, 47, 47, 47, 48, 50,
  51, 53, 54, 54, 55, 55, 55, 60, 60, 61, 61, 66,
  66, 70, 70, 71, 73, 74, 74, 77, 77, 77, 78, 78,
  79, 80, 81, 83, 83, 84, 85, 86, 86, 88, 89, 91,
  93, 94, 97, 98]

let random = arr[Math.floor(Math.random() * arr.length)]

const linearSearch = (x) => {
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i      
    }
  }
}

const suite1 = new Benchmark.Suite()

suite1
  .add('Linear Search', () => linearSearch(random))
  .on('start', () => console.log('Beginning benchmark...'))
  .on('complete', function () {
    const benchmark = Benchmark.filter(this, 'successful')[0]
    console.log(benchmark.stats.mean)
  })
  .run()

const binarySearch = x => {
  let min = 0
  let max = arr1.length - 1

  while (min <= max) {

    let i = Math.floor((min + max) / 2)

    if (arr1[i] < x) {
      min = i + 1
    } else if (arr1[i] > x) {
      max = i - 1
    } else {
      return i
    }
  }

  return false
}

const suite2 = new Benchmark.Suite()

suite2
  .add('Binary Search', () => binarySearch(random))
  .on('start', () => console.log('Beginning benchmark...'))
  .on('complete', function () {
    const benchmark = Benchmark.filter(this, 'successful')[0]
    console.log(benchmark.stats.mean)
  })
  .run()