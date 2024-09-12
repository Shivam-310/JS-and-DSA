function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersectionSet = new Set();
    
    for (const num of set1) {
      if (set2.has(num)) {
        intersectionSet.add(num);
      }
    }
    
    return Array.from(intersectionSet);
  }
  