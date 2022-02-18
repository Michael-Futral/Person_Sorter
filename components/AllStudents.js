import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, Button, Icon, Avatar } from 'react-native-elements';
import { sort } from '../api/logic.js'
import students from '../api/database/students.js'

const sortedStudents = sort(students, 'lastName')
class StudentsComponent1 extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <h1 > All Students</h1>
                </View>
                {sortedStudents.map((student, index) => {
                    return (
                        <Card style={styles.card} >
                            <img styles="width:100%" src={student.studentPhoto} />
                            <View styles={styles.card}>
                                <h4> {student.firstName + " " + student.lastName} </h4>
                                <p> {student.email} </p>
                                <p> {student.gradeAverage.toFixed(2)} </p>
                                <p> {student.level} </p>
                            </View>
                        </Card>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        "background-color": "gray",
        "text-align": "center"
    },
});






export default StudentsComponent1;
