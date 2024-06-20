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
            categoryName: '',
        }
    },
    computed: {
        canCreateTodo: function(){
            return this.todoTitle !== ''
        },
        canCreateCategory: function(){
            return this.categoryName !== ''
        },
    },
    methods: {
        createTodo: function(){
            if (!this.canCreateTodo){
                return
            }

            //ToDoタスクを追加する処理

            this.todoTitle = ''
            this.todoDescription = ''
            this.todoCategories = []
        },
        createCategory: function(){
            if (!this.canCreateCategory){
                return
            }

            //カテゴリを追加する処理

            this.categoryName = ''
        },
    },
}).mount('#app') //チャプター2まで
