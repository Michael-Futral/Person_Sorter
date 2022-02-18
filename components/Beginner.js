import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { top5, sort, getBeginner } from '../api/logic.js'

import students from '../api/database/students.js'

const beginner = getBeginner(students)
class Beginner extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <h1 > Beginner students</h1>
                </View>
                {beginner.map((student, index) => {
                    return (
                        <Card style={styles.card} >
                            <img src={student.studentPhoto} />
                            <div styles={styles.card}>
                                <h4> {student.firstName + " " + student.lastName} </h4>
                                <p> {student.email} </p>
                                <p> {student.gradeAverage.toFixed(2)} </p>
                                <p> {student.level} </p>
                            </div>
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

export default Beginner
