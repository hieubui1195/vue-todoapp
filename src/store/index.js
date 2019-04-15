import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todo: '',
        list: [
            {
                todo: 'fix bugs'
            },
            {
                todo: 'write reports'
            }
        ]
    },
    getters: {
        todo: state => state.todo,
        countToDos: state => state.list.length,
        getToDos: state => state.list
    },
    mutations: {
        INPUT_CHANGE: (state, todo) => {
            state.todo = todo;
        },
        CLEAR_INPUT: (state) => {
            state.todo = '';
        },
        ADD_ITEM: (state, todo) => {
            state.list.push({todo});
        },
        DELETE_ITEM: (state, todo) => {
            state.list.filter(item => item != todo);
        }
    },
    actions: {
        addItem: (context, todo) => {
            context.commit('ADD_ITEM', todo);
            context.commit('CLEAR_INPUT');
        },
        deleteToDo: (context, todo) => {
            context.commit('DELETE_ITEM', todo);
        }
    }
});
