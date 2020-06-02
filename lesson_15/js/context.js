function test() {
  console.log(this); // контекст вызова
  console.log(`Hello ${this.name}`);
}
// Контекст это обьект от имени которого вызывается функция!!!!!
const user = {
  name: 'Ilya',
  greet: test,
}; // литеральная аннотация

const user2 = {
  name: 'John',
  greet: test,
};
test.apply({ name: 'SOME OBJECT' });
// test();
user.greet();
user2.greet();
