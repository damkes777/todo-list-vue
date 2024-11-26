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
        return Array.from({length: 5}, (_, i) => {
            const date = new Date(now.value);
            date.setDate(date.getDate() + i - 2);

            return date.toLocaleDateString(undefined, {month: '2-digit', day: '2-digit'});
        });
    }

    const getYear = () => {
        const date = new Date(now.value)

        return date.toLocaleDateString(undefined, {year: "numeric"})
    }

    const setNextDay = () => {
        const date = new Date(now.value)
        now.value = new Date(date.setDate(date.getDate() + 1))
    };

    const setPreviousDay = () => {
        const date = new Date(now.value)
        now.value = new Date(date.setDate(date.getDate() - 1))
    };

    return {
        now,
        days,
        year,
        setNextDay,
        setPreviousDay,
    };
}