import type { TParams, TResponse, TUseApi } from "@/api/types";
import { computed, ref } from "vue";

export default function useApi(api: TUseApi) {
  const data = ref<null | any>(null);
  const loading = ref<boolean>(false);
  const error = ref<null | Error>(null);

  const onApiCall = computed(() => (params?: TParams) => {
    loading.value = true;
    api(params)
      .then((response: TResponse) => {
        data.value = response.data;
      })
      .catch((er: any) => {
        error.value = er.message;
      })
      .finally(() => (loading.value = false));
  });

  return [onApiCall, data, loading, error];
}
