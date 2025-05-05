import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const sesstion = authClient.useSession();
  const user = computed(() => sesstion.value?.data?.user);

  const loading = computed(() => sesstion.value.isPending || sesstion.value.isRefetching);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    loading,
    signIn,
    user,
    signOut,
  };
});
