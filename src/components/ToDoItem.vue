<template>
    <div class="todo-item">
        <p class="todo-item__text">{{todo.todo}}</p>
        <button class="todo-item__delete" @click="deleteItem(todo)">
            -
        </button>
    </div>
</template>

<script>
export default {
    name: 'to-do-item',
    props: ['todo'],
    methods: {
        deleteItem(todo) {
            this.$store.dispatch('deleteToDo', todo);
        }
    }
}
</script>

