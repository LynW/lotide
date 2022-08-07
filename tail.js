const tail = function(arrayList) {

  let finalArray = [];

  if (arrayList.length <= 1) {
    return finalArray;
  }

  for (let i = 1; i < arrayList.length; i++) {
    finalArray.push(arrayList[i]);
  }

  return finalArray;

};

module.exports = tail;

