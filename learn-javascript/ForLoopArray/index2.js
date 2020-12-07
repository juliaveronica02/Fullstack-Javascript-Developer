var mList = [1,2,3,4,5]
var pos;
for (pos = 0; pos < mList.length; pos++) {
    console.log("Position => " + pos + "Value => " + mList[pos]);
}
// result: 
// Position => 0Value => 1.
// Position => 1Value => 2.
// Position => 2Value => 3.
// Position => 3Value => 4.
// Position => 4Value => 5.

// break keyword.
var pos;
for (pos = 0; pos < mList.length; pos++) {
    if(pos >= 3) break
    console.log("Position => " + pos + "Value => " + mList[pos]);
}
// result:
// Position => 0Value => 1.
// Position => 1Value => 2.
// Position => 2Value => 3.

// 1. example continue keyword.
var pos;
for (pos = 0; pos < mList.length; pos++) {
    if(pos % 2 !== 0) continue
    console.log("Position => " + pos + "Value => " + mList[pos]);
}
// result:
// Position => 0Value => 1.
// Position => 2Value => 3.
// Position => 4Value => 5.

// 2. example continue keyword.
var pos;
for (pos = 0; pos < mList.length; pos++) {
    if(pos % 2 === 0) continue
    console.log("Position => " + pos + "Value => " + mList[pos]);
}
// result:
// Position => 1Value => 2
// Position => 3Value => 4