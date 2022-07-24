<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Wrapper from "./components/Layout/Wrapper.vue";
</script>

<template>
  <Header />

  <Wrapper>
    <RouterView />
  </Wrapper>
</template>

<style scoped></style>
