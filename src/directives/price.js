import Vue from 'vue'

Vue.directive('price', {
  inserted(el, binding) {
    console.log(el)
    el.textContent = binding.value + el.textContent
  }
})

// export default function (Vue) {
//   Vue.directive('price', {
//     inserted(el, binding) {
//       el.textContent = binding.value + el.textContent + '元'
//     }
//   })
// }