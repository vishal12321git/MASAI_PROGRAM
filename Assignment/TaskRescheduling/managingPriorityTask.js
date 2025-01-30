let tasks = ["task 1","tasks 2","tasks 3","tasks 4","tasks 5"]

tasks=tasks.slice(1);

tasks.unshift("Important task 1","Important tasks 2")

tasks[tasks.length-1]="new task"

console.log(tasks)
