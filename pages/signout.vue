<script setup lang="ts">
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div class="w-fit mx-auto mt-12 bg-primary px-3.5 py-1 rounded-xs space-x-2 flex items-center">
    <span class="loading loading-ring loading-xl" />

    <span class="font-medium flex items-center gap-1">Wait We Signing You Out <Icon name="tabler:mood-sad" size="20" />.</span>
  </div>
</template>
