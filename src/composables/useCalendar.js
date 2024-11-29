import {ref, watch, onMounted} from "vue";

export function useCalendar() {
    const now = ref(new Date());
    const days = ref([])
    const monthYear = ref()

    onMounted(() => {
        days.value = getDays()
        monthYear.value = getMonthYear()
    })

    watch(now, () => {
        days.value = getDays()
        monthYear.value = getMonthYear()
    }, {deep: true});

    const getMonthYear = () => {
        const date = new Date(now.value)

        return date.toLocaleDateString(undefined, {month: "long", year: "numeric"})
    }

    const getDays = () => {
        return Array.from({length: 5}, (_, i) => {
            const date = new Date(now.value);
            date.setDate(date.getDate() + i - 2);

            return date.toLocaleDateString(undefined, {day: '2-digit'});
        });
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
        monthYear,
        setNextDay,
        setPreviousDay,
    };
}