function test() {
  let y = 100; // local?
  console.log(y);

  function childFunction() {
    console.log(y);
  }

  childFunction();
}

test();
console.log(y);
