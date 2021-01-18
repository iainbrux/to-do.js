export default class Project {
    constructor(name, desc, due, status) {
        this.name = name;
        this.desc = desc;
        this.due = due;
        this.status = status;
    }

    set projectName(name) {
        return this.name = name
    }

    get projectName() {
        return this.name
    }

    set projectDesc(desc) {
        return this.desc = desc
    }

    get projectDesc() {
        return this.desc
    }

    set projectDate(date) {
        return this.due = date
    }

    get projectDate() {
        return this.due
    }

    set projectStatus(status) {
        return this.status = status
    }

    get projectStatus() {
        return this.status
    }

    checkStatus() {
        console.log(`${this.name} is ${this.status.toLowerCase()}.`);
    }

}
