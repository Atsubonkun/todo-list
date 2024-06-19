Vue.createApp({
    data: function() {
        return {
            todoTitle: '',
            todoDescription: '',
            todoCategories: [],
            selectedCategory: '',
            hideDoneTodo: false,
            searchWord: '',
            order: 'desc',
        }
    },
}).mount('#app')