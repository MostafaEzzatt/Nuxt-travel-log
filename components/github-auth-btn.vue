<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div v-if="authStore.user" class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1 flex items-center">
      {{ authStore.user.name }}
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-6 rounded-full">
          <img :src="authStore.user.image" :alt="authStore.user.name">
        </div>
      </div>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/dashboard/signout">
          <Icon name="tabler:logout-2" size="24" />
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>

  <button
    v-else
    class="btn btn-accent"
    :disabled="authStore.loading"
    @click="authStore.signIn"
  >
    Sign In With Github
    <span v-if="authStore.loading" class="loading loading-ring loading-xl" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
