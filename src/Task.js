export default class Task {
    constructor(name, due) {
        this.name = name;
        this.due = due;
    }

    set taskName(name) {
        return this.name = name
    }

    get taskName() {
        return this.name
    }

    set taskDate(due) {
        return this.due = due
    }

    get taskDate() {
        return this.due
    }

    checkStatus() {
        console.log(`${this.name} is due on ${this.due}.`);
    }

}
