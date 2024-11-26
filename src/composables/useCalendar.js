import {ref, watch, onMounted} from "vue";

export function useCalendar() {
    const now = ref(new Date());
    const days = ref([])
    const year = ref('')

    onMounted(() => {
        days.value = getDays()
        year.value = getYear()
    })

    watch(now, () => {
        days.value = getDays()
    }, {deep: true});

    const getDays = () => {
        return Array.from({length: 7}, (_, i) => {
            const date = new Date(now.value);
            date.setDate(now.value.getDate() + i - 3);

            return date.toLocaleDateString(undefined, {month: '2-digit', day: '2-digit'});
        });
    }

    const getYear = () => {
        const date = new Date(now.value)

        return date.toLocaleDateString(undefined, {year: "numeric"})
    }

    const setNextDay = () => {
        now.value = new Date(now.value.setDate(now.value.getDate() + 1));
    };

    const setPreviousDay = () => {
        now.value = new Date(now.value.setDate(now.value.getDate() - 1));
    };

    return {
        now,
        days,
        year,
        setNextDay,
        setPreviousDay,
    };
}