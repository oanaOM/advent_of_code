const partOne = (list) => {
  const data = list.split("\n\n");

  const validPassports = [];

  data.forEach((passport) => {
    if (
      ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"].every((item) =>
        passport.includes(item)
      )
    ) {
      validPassports.push(passport);
    }
  });
  return validPassports;
};

const partTwo = (list) => {
  const passports = partOne(list);
  const validPassports = [];

  const validators = [
    { key: "byr", condition: (v) => v >= 1920 && v <= 2002 },
    { key: "iyr", condition: (v) => v >= 2010 && v <= 2020 },
    { key: "eyr", condition: (v) => v >= 2020 && v <= 2030 },
    {
      key: "hgt",
      condition: (v) => {
        // strips the units. for example: 150cm -> 150;
        const num = v.replace(/\D/g, "");
        return v.match(
          new RegExp("cm|in")) && (v.includes("cm")
            ? num >= 150 && num <= 193
            : num >= 59 && num <= 76
        );
      },
    },
    {
      key: "hcl",
      condition: (v) => v.match(/^#[0-9A-F]{6}$/i),
    },
    {
      key: "ecl",
      condition: (v) =>
        v.match(
          new RegExp(
            ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].join("|"),
            "g"
          )
        ),
    },
    { key: "pid", condition: (v) => !isNaN(v) && v.split("").length === 9 },
    { key: "cid", condition: (v) => false },
  ];


    passports.forEach((passport) => {
        let countValidItems = 0;
        
        const items = passport.split(new RegExp(["\n", " "].join("|"), "g"));
        items.forEach((passport) => {
          const values = passport.split(":");
          if (validators.filter((val) => val.key === values[0])[0].condition(values[1])) {
            countValidItems++;
          }
        });

      if (countValidItems === 7) {
        validPassports.push(passport);
      }
    });
  return validPassports.length;
};

module.exports = {
  present: partOne,
  validateAndPresent: partTwo,
};
