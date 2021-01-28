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

    set tasktDate(date) {
        return this.due = date
    }

    get tasktDate() {
        return this.due
    }

    checkStatus() {
        console.log(`${this.name} is due on ${this.date}.`);
    }

}
