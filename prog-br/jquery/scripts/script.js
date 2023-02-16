jq = $.noConflict();

let selected = jq("#div3").siblings(".div1");

console.log(selected);

selected = jq("#div3").nextAll(".div1");

console.log(selected);

selected = jq("#div3").prevAll(".div2");

console.log(selected);

selected = jq("#div6").nextUntil("#div9");

console.log(selected);

selected = jq("#div6").prevUntil("#div2");

console.log(selected);

let selected2 = jq("div");

console.log(selected2);

selected2 = jq("div").filter(".div2");

console.log(selected2);

selected2 = jq("#container2").children().filter(".div2");

console.log(selected2);

selected2 = jq("#container1").children().first();

console.log(selected2);

selected2 = jq("#container1").children().last();

console.log(selected2);

selected2 = jq("#container2").children().not(".div2");

console.log(selected2);

selected2 = jq("#container2").children().eq(2);

console.log(selected2);