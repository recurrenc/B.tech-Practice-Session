function processData(input) {
  let tempArray = input.split("\n");
  let entriesLength = tempArray.splice(0, 1); //get the number of entries out of the array
  let queries = tempArray.splice(entriesLength); //dump the queries into their own array

  for (let i = 0; i < entriesLength; i++) {
    tempArray[i] = tempArray[i].split(" "); //split the names from the phones to prepare for mapping
  }

  let phoneBookMap = new Map(tempArray); //turn the array into a map

  for (let i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {
      //check if the qeury (name) exists in the phone book
      console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
    } else {
      console.log("Not found");
    }
  }
}

let string = `3
Sonu 8294008226
Tannu 7884652118
sk 5564885613
Sonu
Tannu
sk`;

processData(string);
