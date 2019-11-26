import Vue from "vue";

const toggleVisibility = function(el, binding) {
  el.style.visibility = binding.value ? "visible" : "hidden";
};

Vue.directive("visible", {
  bind: toggleVisibility,
  update: toggleVisibility
});
