function truncate(str, maxLength) {
  return (str.length > maxLength) ? `${str.slice(0, maxLength - 1)}…` : str;
}

console.log(truncate('long text', 5));
console.log(truncate('long text', 15));
