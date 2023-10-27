function cycle(dir, arr, cur) {
	// Implement me
}
function cycle(direction, list, value) {
  // Find the index of the first occurrence of the given value in the list
  const index = list.indexOf(value);

  if (index === -1) {
    // If the value is not found in the list, return null
    return null;
  } else {
    // Calculate the next index based on the direction
    let nextIndex;

    if (direction === 1) {
      // Move to the right
      nextIndex = (index + 1) % list.length;
    } else if (direction === -1) {
      // Move to the left
      nextIndex = (index - 1 + list.length) % list.length;
    } else {
      // Invalid direction, return null
      return null;
    }

    // Return the element at the calculated index
    return list[nextIndex];
  }
}

// Test cases
console.log(cycle(1, [1, 2, 3], 1));  // Output: 2
console.log(cycle(-1, [1, 2, 3], 1)); // Output: 3
console.log(cycle(1, [1, 2, 3], 0));  // Output: null
console.log(cycle(1, [1, 2, 2, 3], 2)); // Output: 2
