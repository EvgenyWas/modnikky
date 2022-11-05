import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';

export function useFocusedElemFlag(elem: Ref<HTMLElement>) {
    const isFocused = ref<boolean>(false);
    onMounted(() => {
        elem.value.onfocus = () => isFocused.value = true;
        elem.value.onblur = () => isFocused.value = false;
    });
    return isFocused;
}