Vue.createApp({
    data: function() {
        return {
            todoTitle: '',
            todoDescription: '',
            todoCategories: [],
            selectedCategory: '',
            todos: [],
            categories: [],
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
            return this.categoryName !== '' && !this.existsCategory
        },
        existsCategory: function() {
            const categoryName = this.categoryName

            return this.categories.indexOF(categoryName) !== -1
        },
        hasTodos: function(){
            return this.tidos.length > 9
        },
    },
    watch: {
        todos: {
            handler: function(next){
                window.localStorage.setItem('todos', JSON.stringify(next))
            },
            deep: true,
        },
        categories: {
            handler: function(next){
                window.localStorage.setItem('categories', JSON.stringify(next))
            },
            deep: true,
        },
    },
    methods: {
        createTodo: function(){
            if (!this.canCreateTodo){
                return
            }

            this.todos.push({
                id: 'todo-' + Date.now(),
                title: this.todoTitle,
                description: this.todoDescription,
                categories: this.todoCategories,
                dateTime: Date.now(),
                done: false,
            })

            //ToDoタスクを追加する処理

            this.todoTitle = ''
            this.todoDescription = ''
            this.todoCategories = []
        },
        createCategory: function(){
            if (!this.canCreateCategory){
                return
            }

            this.categories.push(this.categoryName)

            //カテゴリを追加する処理

            this.categoryName = ''
        },
        created: function(){
            const todos = window.localStorage.getItem('todos')
            const categories = window.localStorage.getItem('categories')

            if(todos){
                this.todos = JSON.parse(todos)
            }

            if(categories){
                this.categories = JSON.parse(categories)
            }
        }
    },
}).mount('#app') //チャプター2まで
