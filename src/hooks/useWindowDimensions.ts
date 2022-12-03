import { getWindowDimensions } from "@/utils";
import { onMounted, onUnmounted, reactive } from "vue";

export function useWindowDimensions() {
  const windowDimensions = reactive(getWindowDimensions());
  const handleResize = () => {
    Object.assign(windowDimensions, getWindowDimensions());
  };

  onMounted(() => window.addEventListener("resize", handleResize));
  onUnmounted(() => window.removeEventListener("resize", handleResize));

  return windowDimensions;
}
