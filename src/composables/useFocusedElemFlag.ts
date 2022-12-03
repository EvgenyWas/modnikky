import { onMounted, ref } from "vue";

export default function useFocusedElemFlag() {
  const elemRef = ref<HTMLElement>();
  const isFocused = ref<boolean>(false);
  onMounted(() => {
    if (elemRef.value) {
      elemRef.value.onfocus = () => (isFocused.value = true);
      elemRef.value.onblur = () => (isFocused.value = false);
    }
  });
  return { elemRef, isFocused };
}
