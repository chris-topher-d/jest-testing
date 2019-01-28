function chunkArray(arr, num) {
  let chunked = [];
  while (arr.length !== 0) chunked.push(arr.splice(0, num));
  return chunked;
}

module.exports = chunkArray;
