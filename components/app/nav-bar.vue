<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>

    <div class="navbar-end space-x-4">
      <AppThemeToggle />
      <GithubAuthBtn />
    </div>
  </div>
</template>
