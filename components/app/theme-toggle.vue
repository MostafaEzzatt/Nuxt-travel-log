<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get: () => colorMode.value,
  set: (val) => {
    colorMode.preference = val ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <Icon class="swap-on h-10 w-10 fill-current" name="tabler:sun" size="24" />

    <!-- moon icon -->
    <Icon class="swap-off h-10 w-10 fill-current" name="tabler:moon-filled" size="24" />

  </label>
</template>
