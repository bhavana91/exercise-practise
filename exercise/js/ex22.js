Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});
let array=[1, [2, 3, null, 4], [null], 5, [1, 2, 3, 3, undefined, null, '', 9, 0, [3, 4, 5, 6, 7, [0, 9, 2, 3]]]];
 let finalarray=array.flat(Infinity).toString();
let finalresult = finalarray.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").trim();
let jsonarray=finalresult.split(" ");
var newarray = JSON.parse("[" + jsonarray + "]");
console.log([...new Set(newarray)]);



/* let array=[1, [2, 3, null, 4], [null], 5, [1, 2, 3, 3, undefined, null, '', 9, 0, [3, 4, 5, 6, 7, [0, 9, 2, 3]]]];

let emptyarray=[];
let d=array.filter(Boolean).join(',');
emptyarray.push(d);
let tostring=emptyarray.toString();
let result = tostring.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").trim();
let finalres=result.split(" ");
var resultedarray = JSON.parse("[" + finalres + "]");
console.log([...new Set(resultedarray)]); */