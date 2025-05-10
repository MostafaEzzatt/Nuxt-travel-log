<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occured" as string;
</script>

<template>
  <div role="alert" class="alert alert-error">
    <p>
      <span class="font-bold">Error: </span>
      {{ error }}
    </p>

    <NuxtLink to="/" class="btn btn-ghost">
      Go back to home?
    </NuxtLink>
  </div>
</template>
