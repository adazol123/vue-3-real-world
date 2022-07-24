<script setup>
import { RouterLink, RouterView } from "vue-router";
import Wrapper from "./Layout/Wrapper.vue";
</script>

<template>
  <header>
    <Wrapper>
      <div class="header">
        <span>vue </span>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </Wrapper>
  </header>
</template>

<style scoped>
header {
  @apply shadow text-sm;
}
.header {
  @apply flex justify-between items-center w-full py-2;
}

nav {
  @apply flex gap-1;
}

a {
  @apply transition-all duration-500 px-3 py-1;
}
.router-link-active {
  @apply ring-1 ring-black/20 bg-black/80 text-white rounded-sm;
}
</style>
