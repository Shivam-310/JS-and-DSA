function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    
    const charCount1 = {};
    const charCount2 = {};
    
    for (let i = 0; i < str1.length; i++) {
      charCount1[str1[i]] = (charCount1[str1[i]] || 0) + 1;
      charCount2[str2[i]] = (charCount2[str2[i]] || 0) + 1;
    }
    
    for (const char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
    
    return true;
  }
  