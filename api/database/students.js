import faker from 'faker';
function makeStudents() {
    const studentsArr = [];
    for (let i = 0; i < 70; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const gradeAverage = +(Math.random() * 100).toFixed(10);
        const age = Math.floor(Math.random() * (70 - 16) + 16);
        // add logic to distribute student level by average
        let level;
        if (gradeAverage < 50) {
            level = 'beginner';
        } else if (gradeAverage > 75) {
            level = 'expert';
        } else {
            level = 'intermediate';
        }
        studentsArr.push({
            firstName,
            lastName,
            studentPhoto: `https://i.pravatar.cc/150?img=${i}`,
            email: faker.internet.email(`${firstName} ${lastName}`),
            level,
            gradeAverage,
            age,
        });
    }

    return studentsArr;
}

module.exports = makeStudents()