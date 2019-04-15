<template>
    <div id="app">
        <div class="todo">
            <div class="todo-logo">
                <img class="logo" :src="logo" alt="Vue logo" />
            </div>
            <div class="todo-header">
                <h1>Vue To Do</h1>
            </div>
            <div class="todo-container">
                <div class="todo-current">
                    <h3>To Do: {{ todo }}</h3>
                    <h3>Count To Do: {{ countToDos }}</h3>
                </div>
                <div class="todo-content">
                    <ToDoItem v-for="item in list"
                        :todo="item"
                        :key="item.todo"/>
                </div>
                <div class="todo-add">
                    <input class="todo-add__input" type="text" v-bind:value="todo" @input="inputChange" v-on:keyup.enter="handleKeyPress" name="todo" />
                    <button class="todo-add__button" @click="addItem(todo)">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import ToDoItem from './components/ToDoItem.vue';
import Logo from './assets/logo.png';

export default {
    name: 'to-do',
    components: {
        ToDoItem
    },
    data() {
        return {
            logo: Logo
        }
    },
    computed: {
        ...mapState([
            'todo',
            'list'
        ]),
        ...mapGetters([
            'countToDos'
        ]),
        
    },
    methods: {
        ...mapMutations([
            'INPUT_CHANGE'
        ]),
        ...mapActions([
            'addItem'
        ]),
        inputChange: function(event) {
            this.INPUT_CHANGE(event.target.value);
        },
        addItem: function() {
            this.$store.dispatch('addItem', this.$store.state.todo);
        },
        handleKeyPress: function() {
            this.addItem();
        }
    },
}
</script>

<style lang="css">
    #app {
        width: 420px;
        margin: 20px auto;
    }

    .todo-logo {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .todo-header h1 {
        text-align: center;
    }
    .todo-current {
        text-align: center;
    }

    .todo-item {
        display: flex;
    }

    .todo-item__text {
        width: 400px;
    }

    .todo-item__delete {
        width: 20px;
        height: 20px;
    }

    .todo-add {
        display: flex;
    }

    .todo-add__input {
        width: 400px;
    }

    .todo-add__button {
        width: 20px;
        height: 20px;
    }
</style>
