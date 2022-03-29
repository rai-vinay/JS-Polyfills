//++++++++++++++++++++++ CALL APPLY BIND+++++++++++++++++++++
// var employee = {
//   name: 'vinay',
//   hello: function (thing) {
//     console.log(this.name + ' says hello ' + thing);
//   },
// };
// var alterEgo = {
//   name: 'bunny',
// };
// employee.hello.call(alterEgo, 'world');
// employee.hello.apply(alterEgo, ['India']);
// const hello = employee.hello.bind(alterEgo);
// hello('USA');
//  //Event delegation

// ++++++++++++++++++++++++++++++++++++++++++++Custom Flattening
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, [7, 8], 9],
//   [10, 11, 12],
// ];
// function CustomFlat(arr, depth) {
//   let result = [];
//   arr.forEach((ar) => {
//     if (Array.isArray(ar) && depth > 0) {
//       result.push(...CustomFlat(ar, depth - 1));
//     } else result.push(ar);
//   });
//   return result;
// }
// let x = CustomFlat(arr, 2);
// console.log(x);
// ++++++++++++++++++++++++++++++++++++++++++++CUSTOM COMPOSITION ++++++++++++++
function addFive(a) {
  return a + 5;
}
function subtractTwo(a) {
  return a - 2;
}
const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((args, fn) => fn(args), args);
  };
};

const evaluate = compose(addFive, subtractTwo);
console.log(evaluate(5));
