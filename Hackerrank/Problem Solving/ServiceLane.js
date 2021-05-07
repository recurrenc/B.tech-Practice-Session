/*      -------------------------------
       |      HACKERRANK SOLUTION      |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

function serviceLane(width, cases) {
  return cases.map(([i, j]) => Math.min(...width.slice(i, ++j)));
}
