export default class Project {
    constructor(name, desc, due) {
        this.name = name;
        this.desc = desc;
        this.due = due;
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

    sayHi() {
        console.log('Project Hello')
    }

}
