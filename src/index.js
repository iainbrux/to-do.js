import Task from './tasks.js'
import Project from './projects.js'

const task1 = new Task('Test task', 'lorem ipsum description', '23rd november', 'low', 'none extra');

const project1 = new Project('TOP', 'The odin project', 'no date')

console.log(task1)

task1.sayHi();

console.log(project1);