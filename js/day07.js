function partOne(data) {
    let handyHaversacks = {
        partOne: 0,
        partTwo: 0
    }

  const rules = data.split("\n");

  var contains = new Object();
  let containsBy = new Map();

  for (let i = 0; i < rules.length; i++) {
    parts = rules[i].split(" bags contain");

    var subject = parts[0];

    var contents = parts[1].split(",");

    contains[subject] = new Object();

    for (let j = 0; j < contents.length; j++) {
      contents[j] = contents[j].split(".")[0].trim();

      if (contents[j] !== "no other bags") {
        contents[j] = contents[j].replace("bags", "");
        contents[j] = contents[j].replace("bag", "");

        const subparts = contents[j].trim().split(/ (.*)/);
        const num = subparts[0];
        const content = subparts[1];

        if (containsBy.get(content) instanceof Array == false) {
          containsBy.set(content, []);
          containsBy.get(content).push(subject);
        } else {
          containsBy.get(content).push(subject);
        }

        contains[subject][content] = num;
      }
    }
  }

  let newlyFound = ["shiny gold"];
  let found = new Map();
  found.set("shiny gold", true);

  let shinyGoldParents = 0;

  // infinite loops
  for (;;) {
    let nextCycle = [];
    for (let i = 0; i < newlyFound.length; i++) {
      let validParents = [];

      if (containsBy.get(newlyFound[i]) === undefined) {
        validParents = [];
      } else {
        validParents = containsBy.get(newlyFound[i]);
      }

      for (let value of validParents.values()) {

        if (!found.get(value)) {
          shinyGoldParents++;
          found.set(value, true);
          nextCycle.push(value);
        }
      }
    }
    if (nextCycle.length === 0) {
      break;
    }
    newlyFound = nextCycle;
  }

    handyHaversacks.partOne = shinyGoldParents;
    // console.log(
    //   "How many bag colors can eventually contain at least one shiny gold bag?",
    //   shinyGoldParents
    // );


    let newlyFoundBags = new Map();
    newlyFoundBags.set('shiny gold', 1);

    let allBagsFound = new Map();

    for (; ;) {

        let nextCycle = new Map();

        for (let [bag, key] of newlyFoundBags) {
            let children = contains[bag];

            for (let property in children) {
                let childrenValue = 0;
                
                childrenValue += children[property] * key;

                allBagsFound.set(property, childrenValue);
                nextCycle.set(property, childrenValue);
            }
        }
        if (nextCycle.size === 0) {
            break;
        }
        newlyFoundBags = nextCycle;
    }
    var children = 0;
    for (let [key, value] of allBagsFound) { 
        children += value
    }
    // console.log(
    //   "How many individual bags are required inside your single shiny gold bag? ", children
    // );

    handyHaversacks.partTwo = children;

  return handyHaversacks;
}

function partTwo() {}

module.exports = {
  shinyBag: partOne,
};
