<template>
  <div class="relative">
    <select
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :value="value"
      class="h-full block w-full appearance-none border bg-white border-gray-400 text-gray-800 py-2 px-4 pr-8 rounded focus:outline-none focus:border-gray-500"
    >
      <option v-for="item of items" :key="item" :value="item">{{
        item
      }}</option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  inheritAttrs: false,
  props: {
    value: [String, Number],
    items: Array
  }
};
</script>

<style lang="scss" scoped></style>
