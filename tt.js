(function(){science = {version: "1.7.0"}; // semver
science.ascending = function(a, b) {
  return a - b;
};
// Euler's constant.
science.EULER = .5772156649015329;
// Compute exp(x) - 1 accurately for small x.
science.expm1 = function(x) {
  return (x < 1e-5 && x > -1e-5) ? x + .5 * x * x : Math.exp(x) - 1;
};
science.functor = function(v) {
  return typeof v === "function" ? v : function() { return v; };
};
