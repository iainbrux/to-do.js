export default class Task {
    constructor(name, due, status) {
        this.name = name;
        this.due = due;
        this.status = status;
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

    set taskStatus(status) {
        return this.status = status
    }

    get taskStatus() {
        return this.status
    }

    checkStatus() {
        console.log(`${this.name} is due on ${this.due}.`);
    }

}
