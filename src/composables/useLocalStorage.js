import {onBeforeMount, watch} from "vue";

export function useLocalStorage(key, ref) {
    onBeforeMount(() => {
        const value = window.localStorage.getItem(key) ?? [];
        if (value) {
            ref.value = JSON.parse(value) ?? [];
        }
    });

    watch(ref, () => {
        localStorage.setItem(key, JSON.stringify(ref.value));
    }, {deep: true});
}