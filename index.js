const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection) === true) {
        for (const element of collection) {
          callback(element)
        }
        return collection
      } else {
        for (const property in collection) {
          callback(collection[property], property, collection)
        }
        return collection
      }
    },

    map: function(collection, callback) {
      let newArray = [];

      if (Array.isArray(collection) === true) {
        for (const element of collection) {
          newArray.push(callback(element))
        }
        return newArray;
      } else {
        for (const property in collection) {
          newArray.push(callback(collection[property]))
        }
        return newArray;
      }
    },

    reduce: function(collection, callback, acc) {
      if (acc !== undefined) {
        let val = 0

        for(const element of collection) {
          val += callback(0, element, collection)
        }
        return val + acc
      } else {
        let val = collection[0]
        let newCollection = collection.slice(1)

        for(const element of newCollection) {
          val += callback(0, element, collection)
        }
        return val
      }
    },

    find: function (collection, predicate) {
      for(const element of collection) {
        if (predicate(element) === true) {
          return element
          break;
        }
      }
    },

    filter: function (collection, predicate) {
      let newCollection = []
      for(const element of collection) {
        if (predicate(element) === true) {
          newCollection.push(element)
        }
      }
      return newCollection
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        let counter = 0;
        for(const element of collection) {
          counter += 1
        }
        return counter
      } else {
        let counter = 0;
        for(const property in collection) {
          counter += 1
        }
        return counter
      }
    },

    first: function (array, n) {
      if (n === undefined) {
        return array[0]
      } else {
        let newArray = []
        for (let i = 0; i < n; i++) {
          newArray.push(array[i])
        }
        return newArray
      }
    },

    last: function (array, n) {
      if (n === undefined) {
        return array[array.length - 1]
      } else {
        return array.slice(-n)
      }
    },

    compact: function (array) {
      let newArray = []
      for (const element of array) {
        if (!!element == true) {
          newArray.push(element)
        }
      }
      return newArray
    },

    sortBy: function (array, callback) {
      let firstArray = []
      let secondArray = []

      for (const element of array) {
        firstArray.push([callback(element), element])
      }

      if (firstArray[0][0] !== firstArray[0][1]) {
        firstArray.sort((a,b) => a[0]-b[0])

        for (const element of firstArray) {
          secondArray.push(element[1])
        }
          return secondArray
      } else {
        for (const element of firstArray.sort()) {
          secondArray.push(element[0])
        }
        secondArray.sort((a,b) => a-b)
        return secondArray
      }
    },

    flatten: function (array) {
      let newArray = []
      console.log(array)

      for (const element of array) {
        if (typeof element !== "object") {
          newArray.push(element)
        } else {
          console.log(element.length)
        }
      }

    },

    uniq: function (array, isSorted, callback) {
      let firstArray = []
      let secondArray = []

      if (callback === undefined) {
        for (const element of array) {
          if (!firstArray.includes(element)) {
            firstArray.push(element)
          }
        }
        return firstArray
      } else {

      }
    },

    keys: function (object) {
      let array = []
      for (const property in object) {
        array.push(property)
      }
      return array
    },


    values: function (object) {
      let array = []
      for (const property in object) {
        array.push(object[property])
      }
      return array

    },

    functions: function(object) {
      let array = []

      for (const property in object) {
        if (typeof object[property] == 'function') {
          array.push(property)
        }
      }
      return array
    },


  }
})()

fi.libraryMethod()
