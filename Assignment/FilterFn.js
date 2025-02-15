function processStudents(students){
    const fileterdStudents = students.filter(student=>student.marks>60)
    .sort((a,b)=>(b.marks-a.marks))
    .map((student)=>student.name)

    return fileterdStudents;
}


const students = [
    { name: "Alice", marks: 58 },

    { name: "Bob", marks: 85 },
    
    { name: "Charlie", marks: 92 },
    
    { name: "David", marks: 45 }
]

const res = processStudents(students);
console.log(res)

