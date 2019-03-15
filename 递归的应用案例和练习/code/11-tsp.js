/**
 * 旅行商问题
 * @param {*} distances 
 */
function tsp(distances) {

}

const distances = {
  a: {
    b: 10,
    c: 15,
    d: 20,
  },
  b: {
    a: 10,
    c: 35,
    d: 25,
  },
  c: {
    a: 15,
    b: 35,
    d: 30,
  },
  d: {
    a: 20,
    b: 25,
    c: 30,
  }
}

console.log(tsp(distances))
