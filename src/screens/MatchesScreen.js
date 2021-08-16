import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const MatchesScreen = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View styles={styles.container}>
                <Text style={styles.title}>Matches</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F63A6E'},
    root: {
        width: '100%',
        flex: 1,
        padding: 10,

    }
});

export default MatchesScreen
