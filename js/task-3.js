class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = str + this.#value;
  }
  padStart(str) {
    this.#value = str + this.#value + str;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// const one = ".";
// const two = "^";
// const three = "=";
// console.log(three + two + one + two + three);
