<template>
  <text__field>
    <input
      type="text"
      id="__input"
      class="__input"
      :class="props.class"
      :required="props.required"
      placeholder=" "
    />
    <div class="__label_wrapper" :class="props.activeClass">
      <label v-if="props.label" for="__input" class="__label">
        {{ props.label }}
      </label>
      <label v-else for="__input" class="__placeholder">
        {{ props.placeholder }}
      </label>
      <fieldset>
        <legend v-if="props.label">
          {{ props.label }}
        </legend>
      </fieldset>
    </div>
  </text__field>
</template>

<script setup>
let text__field = "text__field";
let props = defineProps({
  placeholder: String,
  label: String,
  required: Boolean,
  class: CSS,
  activeClass: CSS,
});
</script>

<style scoped>
text__field {
  @apply relative flex w-fit rounded-md;
}

input {
  @apply outline-none px-3 py-3 block bg-transparent text-inherit;
}

.__label_wrapper {
  @apply absolute inset-0 border-0;
}

.__input {
  @apply block w-full h-full z-[10]  inset-y-0 border rounded-md placeholder:text-transparent;
}

.__input:focus,
.__input:not(:placeholder-shown).__input:not(:focus) {
  @apply border-0;
}

/** LABEL TAG */
.__label {
  @apply absolute m-0 z-[1]  whitespace-nowrap overflow-hidden select-none translate-x-3 top-1/2 -translate-y-1/2 transition-all text-inherit opacity-50;
}
.__input:focus ~ div > .__label,
.__input:not(:placeholder-shown).__input:not(:focus) ~ div > .__label {
  @apply top-0 -translate-y-[0.35rem] translate-x-[0.85rem] text-[0.45rem]  opacity-100;
}

.__input:focus.__input:required ~ div > .__label::after,
.__input:not(:placeholder-shown).__input:not(:focus).__input:required
  ~ div
  > .__label::after {
  content: "*";
  @apply text-red-400 opacity-100;
}
.__input:focus.__input:required ~ div > .__label,
.__input:not(:placeholder-shown).__input:not(:focus).__input:required
  ~ div
  > .__label {
  @apply -translate-y-[0.35rem] translate-x-[0.85rem] text-[0.45rem] opacity-100;
}

fieldset {
  @apply border rounded-md absolute  w-[calc(100%)]  px-2 inset-y-0  select-none text-[0.5rem] overflow-hidden h-[calc(100%)] border-black/40 opacity-30;
}

.__input:focus ~ div > fieldset,
.__input:not(:placeholder-shown).__input:not(:focus) ~ div > fieldset {
  @apply border opacity-100;
}

.__placeholder {
  @apply absolute m-0 z-[1]  whitespace-nowrap overflow-hidden select-none translate-x-3 top-1/2 -translate-y-1/2 transition-all text-inherit opacity-50;
}

.__input:focus ~ div > .__placeholder {
  @apply hidden;
}

legend {
  @apply px-1 text-transparent h-0;
}
</style>
