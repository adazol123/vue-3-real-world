<script setup>
import { ref } from "vue";
import axios from "axios";
import EventService from "@/services/EventService.js";

const disabled = ref(false);

  EventService.getEvents().then((res) => {
    pokemons.value = res.data?.results;
    disabled.value = false;
  });
function warnDisabled() {
  disabled.value = !disabled.value;
}

let pokemons = ref(null);
</script>

<template>
  <main>
    <p>Hello world</p>
    <div :class="{ shake: disabled }">
      <button @click="warnDisabled">
        <span v-if="disabled">Opps!</span>
        <span v-else>Retrieve pokemons</span>
      </button>
    </div>
    <p>
      <div v-if="pokemons" v-for="(pokemon, index) in pokemons">
      <RouterLink :to="{ name: 'pokemon', params: {id: index + 1}}">
{{ pokemon.name }}
      </RouterLink>
      </div>
    </p>
  </main>
</template>

<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

a:hover{
  @apply underline underline-offset-4 text-black/40;
}

button {
  @apply bg-black/20 p-2 rounded-sm w-[143px];
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
