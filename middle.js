const middle = function(arrayList) {
  
  let result = [];

  if (arrayList.length < 3) {
    return result;
  }

  if (arrayList.length % 2 === 0) {
    result = [arrayList[(arrayList.length / 2) - 1], arrayList[(arrayList.length / 2)]];
    return result;
  } else {
    result = [arrayList[(arrayList.length / 2).toFixed() - 1]];
    return result;
  }

  
}

module.exports = middle;

