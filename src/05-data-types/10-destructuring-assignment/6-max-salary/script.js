function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  Object.entries(salaries).forEach(([name, salary]) => {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  });

  return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));
