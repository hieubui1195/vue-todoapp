<template>
    <div id="app">
        <div class="todo">
            <img class="logo" :src="logo" alt="Vue logo" />
            <div class="todo-header">
                <h1>Vue To Do</h1>
            </div>
            <div class="todo-container">
                <div class="button-state">
                    <h3>Change data example</h3>
                    <button @click="changeButtonState">
                        Button: {{buttonState ? 'On' : 'Off'}}
                    </button>
                </div>
                <div class="todo-content">
                    <ToDoItem v-for="item in list"
                        :todo="item"
                        @delete="deleteItem"
                        :key="item.todo"/>
                </div>
                <input type="text" v-model="todo" v-on:keyup.enter="handleKeyPress" />
                <button class="todo-add" @click="createNewToDoItem()">+</button>
            </div>
        </div>
    </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'
import Logo from './assets/logo.png';

export default {
    name: 'to-do',
    components: {
        ToDoItem
    },
    data() {
        return {
            list: [
                {
                    todo: 'fix bugs'
                },
                {
                    todo: 'write reports'
                }
            ],
            todo: '',
            buttonState: false,
            logo: Logo
        }
    },
    methods: {
        changeButtonState() {
            return this.buttonState = !this.buttonState;
        },
        createNewToDoItem() {
            if (!this.todo){
                alert("Please enter a todo!");

                return;
            }

            this.list.push({todo: this.todo});
            this.todo = '';
        },
        handleKeyPress() {
            return this.createNewToDoItem();
        },
        deleteItem(todo) {
            this.list = this.list.filter(item => item !== todo);
        }
    }
}
</script>

