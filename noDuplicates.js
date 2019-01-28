const noDuplicates = arr => {
  return Array(...new Set(arr));
};

module.exports = noDuplicates;
