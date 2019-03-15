/**
 * 旅行商问题
 * @param {*} distances 
 */
function tsp(distances) {
  let minLen = Number.MAX_SAFE_INTEGER, seq, places = Object.keys(distances)

  places.forEach((x, i) => {
    let visited = []
    visited[i] = true
    tryNext(visited, [i], 0, places.length - 1)
  })

  function tryNext(visited, history, curlen, left) {
    if (curlen >= minLen) {
      return
    }
    if (left == 0) {
      minLen = curlen
      seq = history
      return
    }
    for (let i = 0; i < places.length; i++) {
      if (visited[i]) {
        continue
      }
      let newVisited = visited.concat()
      newVisited[i]=true
      let lastPlace = places[history[history.length - 1]]
      let newPlace = places[i]
      tryNext(newVisited, history.concat(i), curlen + distances[lastPlace][newPlace], left - 1)
    }
  }

  return seq.map(x => places[x])
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
