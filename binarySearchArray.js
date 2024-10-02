function searchBinaryTreeArray(tree, target, index = 0) {
    // If the index is out of bounds, return false (element not found)
    if (index >= tree.length) {
      return false;
    }
  
    // If the current index holds the target value, return true (element found)
    if (tree[index] === target) {
      return true;
    }
  
    // Recursively search the left child and right child
    return (
      searchBinaryTreeArray(tree, target, 2 * index + 1) ||  // Left child
      searchBinaryTreeArray(tree, target, 2 * index + 2)     // Right child
    );
  }
  
  // Example usage:
  const tree = [10, 6, 15, 3, 8, 12, 20];
  const target = 8;
  const found = searchBinaryTreeArray(tree, target);
  
  console.log(found ? 'Element found!' : 'Element not found.');
  