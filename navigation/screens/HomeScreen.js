import * as React from 'react'; // * = everything
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import SearchBar from '../../components/SearchBar';
import SettingsScreen from '../../components/SettingsScreen';

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = React.useState('');
  
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar searchText={searchText} onChangeText={setSearchText} style={styles.searchBar}/>
                <View style={styles.imageContainer}>
                    <View style={styles.imageTextContainer}>
                        <Pressable 
                            onPress={() => navigation.navigate('Campus')}
                            style={( { pressed }) => {
                                return{ opacity: pressed ? 0.5 : 1}
                            }}>
                            <Image style={styles.image} source={require("../../assets/images/campusmontpellier.jpg")}/>
                        </Pressable>
                        <Text style={styles.imageText}>Nos Campus</Text>
                    </View>
                    <View style={styles.imageTextContainer}>
                        <Pressable 
                            onPress={() => navigation.navigate('Formation')}
                            style={( { pressed }) => {
                                return{ opacity: pressed ? 0.5 : 1}
                            }}>
                            <Image style={styles.image} source={require("../../assets/images/formations.jpg")}/>
                        </Pressable>
                        <Text style={styles.imageText}>Formations</Text>
                    </View>
                    
                </View>

                <Text style={styles.textMargin}>Test</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Tests") }>
                    <Text style={styles.buttonText}>Demarrer</Text>
                </Pressable>

                <Text style={styles.textMargin}>Newsletter</Text>

            </View>
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
    searchBar: {
        marginTop: 20, // Add margin to move the search bar down
    },
    textMargin: {
        marginTop: 10,
        marginLeft: 15,
        fontSize: 26, 
        fontWeight: 'bold',
    },
    imageContainer: {
        marginTop: 20,
        flexDirection: 'row', //align horizon
        justifyContent: 'space-between',
        paddingHorizontal: 40, // Add padding for spacing
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    imageText: {
        marginTop: 5,
    },
    imageTextContainer: {
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 64,
    },
    buttonText: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
    }
})