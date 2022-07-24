<template>
  <button @click="router.back()">Go back</button>
  <div v-if="pokemon?.sprites" class="grid place-content-center min-h-[30vh]">
    <h3>Pokemon</h3>
    <div class="flex items-center">
      <img :src="pokemon?.sprites?.front_shiny" class="w-16" alt="" />
      <div>
        <h3 class="text-xl font-bold">{{ pokemon.name }}</h3>
        <div class="flex gap-2">
          <p v-for="type in pokemon.types" class="text-black/40">
            {{ type.type.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading ..</div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import router from "../router";
import EventService from "../services/EventService";

/** received props from homeview component which enabled from router as props */
let props = defineProps(["id"]);

console.log(props);

/** alternative from getting the id from props which is reading the param directly from the url routes */
let route = useRoute();
let pokemon = ref(null);

EventService.getEvent(props.id).then((res) => {
  pokemon.value = res.data;
});
</script>

<style scoped>
button {
  @apply p-2 border rounded-sm my-2;
}
</style>
