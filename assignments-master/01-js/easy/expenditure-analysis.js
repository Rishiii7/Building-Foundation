/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let spentByCategoryMap = new Map();

  for(let i=0; i<transactions.length; i++){
    let transaction = transactions[i];

    if(spentByCategoryMap.has(transaction["category"])){
      let totalSpent = spentByCategoryMap.get(transaction["category"]);

      spentByCategoryMap.set(transaction["category"], transaction["price"] + totalSpent);
    }
    else{
      spentByCategoryMap.set(transaction["category"], transaction["price"]);
    }
    // console.log("for iteration " + i + " map is ")
    // console.log(spentByCategoryMap);
    // console.log("\n");
  }
  // console.log(spentByCategoryMap);
  let finalAnswer = []

  spentByCategoryMap.forEach((value,key) => {
    finalAnswer.push({category: key, totalSpent: value});
  })
  // console.log("final answer" + finalAnswer);


  return finalAnswer;
}

module.exports = calculateTotalSpentByCategory;