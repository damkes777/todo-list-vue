import {ref} from "vue";

export function useTodos() {
    let todos = ref([{}])

    const onTodoCreated = (todo) => {
        todos.value.push({
            value: todo.value['value'],
            date: todo.value['date'],
            done: false
        })
    }

    const onTodoDelete = (id) => {
        todos.value.splice(id, 1)
    }

    const onMarkAsDone = (id) => {
        todos.value[id].done = true
    }

    const onUndo = (id) => {
        todos.value[id].done = false
    }

    return {
        todos,
        onTodoCreated,
        onTodoDelete,
        onMarkAsDone,
        onUndo,
    }
}