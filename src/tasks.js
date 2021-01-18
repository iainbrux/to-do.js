import Project from './projects'

export default class Task extends Project {

    constructor(name, desc, due, status, priority, notes) {
        super(name, desc, due, status);
        this.priority = priority;
        this.notes = notes;
    }

    set taskName(name) {
        return this.name = name
    }

    get taskName() {
        return this.name
    }

    set taskDesc(desc) {
        return this.desc = desc
    }

    get tasktDesc() {
        return this.desc
    }

    set taskDate(date) {
        return this.due = date
    }

    get taskDate() {
        return this.due
    }

    set priorityLevel(level) {
        return this.priority = level
    }

    get priorityLevel() {
        return this.priority
    }

    set newNote(notes) {
        return this.notes = notes
    }

    get newNote() {
        return this.notes;
    }

}