import {ref} from "vue";

export function useTodos() {
    let todos = ref([])

    const onTodoCreated = (todo) => {
        todos.value.push(todo)

    }

    const onTodoDelete = (id) => {
        todos.value.splice(id, 1)
    }

    return {
        todos,
        onTodoCreated,
        onTodoDelete
    }
}