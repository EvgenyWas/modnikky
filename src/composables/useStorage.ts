import type { STORAGE_KEYS } from "@/config";
import type { TStorage } from "@/types/types";
import { ref } from "vue";

export default function useStorage(
  key: STORAGE_KEYS,
  initialValue: TStorage,
  storage = localStorage
) {
  let storageValue = ref<any>();
  try {
    const value = storage.getItem(key) as string;
    storageValue.value = JSON.parse(value);
  } catch (error) {
    storageValue.value = initialValue;
  }

  function setItem(item: TStorage) {
    try {
      const value = JSON.stringify(item);
      storageValue.value = item;
      storage.setItem(key, value);
    } catch (error) {
      storageValue.value = initialValue;
    }
  }

  function removeItem() {
    try {
      storage.removeItem(key);
    } catch (error) {
      storageValue.value = "";
    }
  }

  return { storageValue, setItem, removeItem };
}
