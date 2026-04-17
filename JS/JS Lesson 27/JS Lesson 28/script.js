//SET TASKS

// 1.
function deleteDuplicates(arr) {
  return [...new Set(arr)];
}

// 2. 
function Special(str) {
  return new Set(str).size === str.length;
}

// 3. 
function merge(a, b) {
  return [...new Set([...a, ...b])];
}

// 4. 
function crossing(a, b) {
  const setB = new Set(b);
  return a.filter(x => setB.has(x));
}

// 5. 
function difference(a, b) {
  const setB = new Set(b);
  return a.filter(x => !setB.has(x));
}

// MAP TASKS

// 1. 

function countHz(arr) {
  const map = new Map();

  for (let item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  return map;
}

// 2. 


//??????????
// function fibonacci(n) {

//   if (cache.has(n)) {

//     return cache.get(n);

//   }

//   const result = n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

//   cache.set(n, result);

//   return result;

// }



// 3. 
function haspair(map, key, value) {
  return map.has(key) && map.get(key) === value;
}

// 4. 
function reverseMap(map) {
  const reversed = new Map();
  for (let [key, value] of map) {
    reversed.set(value, key);
  }
  return reversed;
}

// 5. 
function groupType(arr) {
  const map = new Map();
  for (let obj of arr) {
    if (!map.has(obj.type)) map.set(o.type, []);
    map.get(obj.type);
  }
  return map;
}