import { AUTHORIZED_EXPIRATION_DAYS, COOKIES, STORAGE_KEYS } from "@/config";
import type { TUserCredentials } from "@/types/types";
import {
  deleteCookie,
  getCookie,
  setCookie,
  getFutureDateInDays,
} from "@/utils";
import { onMounted, ref } from "vue";
import useStorage from "./useStorage";

export default function useAuth() {
  const isAuthorized = ref<boolean>(false);
  const isCorrectCredentials = ref<boolean>(false);
  const storageAuth = useStorage(STORAGE_KEYS.AUTH, {});

  const signIn = (email: string, password: string) => {
    const authValue = storageAuth.storageValue.value;
    const userEmail = authValue?.email;
    const userPassword = authValue?.password;
    const hasCredentials = userEmail && userPassword;
    isCorrectCredentials.value =
      userEmail === email && userPassword === password;

    if (hasCredentials && isCorrectCredentials) {
      setCookie(COOKIES.AUTHORIZED, "true", {
        expires: getFutureDateInDays(AUTHORIZED_EXPIRATION_DAYS),
      });
      isAuthorized.value = true;
    }
  };

  const signUp = (credentials: TUserCredentials) => {
    setCookie(COOKIES.AUTHORIZED, "true", {
      expires: getFutureDateInDays(AUTHORIZED_EXPIRATION_DAYS),
    });
    storageAuth.setItem({ ...credentials });
    isAuthorized.value = true;
  };

  const signOut = () => {
    isAuthorized.value = false;
    deleteCookie(COOKIES.AUTHORIZED);
  };

  onMounted(() => {
    const hasAuthCookie = getCookie(COOKIES.AUTHORIZED);
    if (hasAuthCookie) {
      isAuthorized.value = true;
    }
  });

  return { isAuthorized, isCorrectCredentials, signIn, signUp, signOut };
}
