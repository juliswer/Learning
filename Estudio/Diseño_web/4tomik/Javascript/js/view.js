class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.btn = document.getElementById('add');
    }

    setModel(model) {
        this.model = model;
    }

    addTodo(title, description) {

    }
}