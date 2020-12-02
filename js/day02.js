/* Task 1*/

function validator(input) {
  var validPasswords = [];

  for (var i = 0; i < input.length; i++) {
    var letterCounter = 0;

    for (let j = 0; j < input[i].password.length; j++) {
      if (input[i].password.charAt(j) === input[i].letter) {
        letterCounter++;
      }
    }

    if (
      letterCounter >= input[i].policy.split("-")[0] &&
      letterCounter <= input[i].policy.split("-")[1]
    )
      validPasswords.push(input[i]);
  }

  return validPasswords.length;
}

/* Task 2*/

function strictValidator(input) {
  const validPasswords = input.filter(
    (line) =>
      (line.password[line.policy.split("-")[0] - 1] === line.letter &&
        line.password[line.policy.split("-")[1] - 1] != line.letter) ||
      (line.password[line.policy.split("-")[1] - 1] === line.letter &&
        line.password[line.policy.split("-")[0] - 1] != line.letter)
  );

  return validPasswords.length;
}
