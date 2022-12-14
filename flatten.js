const flatten = function(arrayList) {

  let result = [];

  for (const items of arrayList) {
    if (typeof items === "number") {
      result.push(items);
    } else {
      for (let subItems of items) {
        result.push(subItems);
      }
    }
  }

  return result;
  
};

module.exports = flatten;