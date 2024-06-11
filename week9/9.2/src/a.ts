interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User): boolean {
  if (user.age > 18) {
    return true;
  }

  return false;
}

const val = isLegal({
  firstName: "rishi",
  lastName: "solapure",
  age: 23,
});

console.log(val);
