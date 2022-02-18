import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native'

import Constants from 'expo-constants';

// You can import from local files

import AllStudents from './components/AllStudents.js'
import Topfive from './components/Topfive'
import Beginner from './components/Beginner'
import Header from './components/Header'
import Expert from './components/Expert'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import makeStudents from './api/database/students'

// state based on what page you are on. And use touchable opacity to change the state


class App extends React.Component {
    state = {
        page: ''
    }

    render() {
        let component
        const { page } = this.state
        if (page === 'AllStudents') {
            component = <AllStudents />
        } else if (page === 'topFive') {
            component = <Topfive />
        } else if (page === 'beginner') {
            component = <Beginner />
        } else if (page === 'Expert') {
            component = <Expert />
        }

        return (
            <View style={styles.navbarContainer}>
                <View  >
                    <Header />
                </View>
                <View >
                    <Button onPress={() => { this.setState({ page: 'AllStudents' }) }} title="All Students" />
                </View>
                <Button onPress={() => { this.setState({ page: 'topFive' }) }} title="Top 5" />
                <Button onPress={() => { this.setState({ page: 'beginner' }) }} title="beginner" />
                <Button onPress={() => { this.setState({ page: 'Expert' }) }} title="Expert" />
                <Button onPress={() => { this.setState({ page: '' }) }} title="clear" />

                <div>
                    {component}
                </div>
            </View>
        )

    }
}

export default App

const styles = StyleSheet.create({
    navbarContainer: {
        display: "flex",
        width: "100%"
    },

});
