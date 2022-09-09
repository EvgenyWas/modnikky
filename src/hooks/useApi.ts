import type { TParams } from "@/api/types";
import { computed, ref } from "vue";

type TResponse = {
    data: any
}

export default function useApi(api: any) {
    const data = ref<null | any>(null);
    const loading = ref<boolean>(true);
    const error = ref<null | Error>(null);

    const onApiCall = computed(() => (params?: TParams) => {
        api(params)
            .then((response: TResponse) => {
                data.value = response.data;
            })
            .catch((er: any) => {
                error.value = er.message;
            })
            .finally(() => loading.value = false)
    })

    return [onApiCall, data, loading, error]
}
