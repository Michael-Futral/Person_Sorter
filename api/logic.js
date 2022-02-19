function top5(studentsArr) {
    const top5Arr = [];
    let lowAverageIndex;
    for (let i = 0; i < studentsArr.length; i++) {
        let lowAverage = Infinity;
        const student = studentsArr[i];
        if (top5Arr.length < 5) {
            top5Arr.push(student);
        } else {
            for (let j = 0; j < top5Arr.length; j++) {
                const lowAvStudent = top5Arr[j];
                // console.log('lowAvStudent', lowAvStudent);
                if (lowAvStudent.gradeAverage < lowAverage) {
                    lowAverage = lowAvStudent.gradeAverage;
                    lowAverageIndex = j;
                }
            }
            if (student.gradeAverage > lowAverage) {
                top5Arr.splice(lowAverageIndex, 1, student);
            }
        }
    }
    return top5Arr;
}

function sort(studentsArr, sortBy, reverse = false) {
    let sorted;
    if (sortBy === 'gradeAverage' || sortBy === 'age') {
        sorted = studentsArr.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
        sorted = studentsArr.sort((a, b) => ((a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0)));
    }

    if (reverse) {
        return sorted.reverse();
    }
    return sorted;
}

function getBeginner(studentsArr) {
    let beginnerStudents = []
    for (let i = 0; i < studentsArr.length; i++) {
        const student = studentsArr[i]1
        if (student.level === 'beginner') {
            beginnerStudents.push(student)
        }
    }
    return beginnerStudents
}


function getExpert(studentsArr) {
    let expertStudents = []
    for (let i = 0; i < studentsArr.length; i++) {
        const student = studentsArr[i]
        if (student.level === 'expert') {
            expertStudents.push(student)
        }
    }
    return expertStudents
}

module.exports = { top5, sort, getBeginner, getExpert, }

