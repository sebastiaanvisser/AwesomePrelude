add = (function (v5){ return /* free: ["v5"] */(function (v6){ return /* free: ["v5","v6"] */v5 + v6; }); })
cons = (function (v1){ return /* free: ["v1"] */(function (v2){ return /* free: ["v1","v2"] */{ head : v1, tail : v2 }; }); })
fix = (function (v1){ return /* free: ["v1"] */fix = arguments.callee, v1(function (i) { return fix(v1)(i) }); })
list = (function (v3){ return /* free: ["v3"] */(function (v4){ return /* free: ["v3","v4"] */(function (v5){ return /* free: ["v3","v4","v5"] */v5.nil ? v3 : v4(v5.head)(v5.tail); }); }); })
fix((function (v1){ return /* free: ["v1"] */(function (v2){ return /* free: ["v1","v2"] *//* free: ["v1"] */list(0)(/* free: ["v1"] */(function (v3){ return /* free: ["v1","v3"] */(function (v4){ return /* free: ["v1","v3","v4"] *//* free: ["v3"] */add(/* free: ["v3"] */v3)(/* free: ["v1","v4"] *//* free: ["v1"] */v1(/* free: ["v4"] */v4)); }); }))(/* free: ["v2"] */v2); }); }))(cons(1)(cons(2)(cons(3)(cons(4)(cons(5)(cons(6)(cons(7)({ nil : 1 }))))))))