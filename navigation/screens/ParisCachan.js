import * as React from 'react'; // * = everything
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image, Dimensions } from 'react-native';
import SearchBar from '../../components/SearchBar';

export default function ParisCachan({navigation}) {
    const [searchText, setSearchText] = React.useState('');
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar searchText={searchText} onChangeText={setSearchText} />
                <Text 
                    style={styles.text}>Paris-Cachan
                </Text>
            </View>
            <Image style={styles.image} source={require("../../assets/images/campus_paris_cachan2.jpeg")}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16, // Add some padding to avoid touching edges
        
    },
    text: {
        marginTop: 10,
        textAlign: 'center', 
        fontSize: 26, 
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    image: {
        width: 400, // Set the width to the width of the device's screen
        height: 200,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    anciensResultats: {
        marginTop: 30,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        textAlign: 'justify',
        
    },
})