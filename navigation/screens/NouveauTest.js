import * as React from 'react'; // * = everything
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function TestsScreen({navigation}) {
    const [searchText, setSearchText] = React.useState('');
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/MAJAX.png")} resizeMode='contain'/>
                <Image style={{width: 50, height: 75, marginTop: 10, marginLeft:200}} source={require("../../assets/images/epf.jpg")} resizeMode='contain'/>
            </View>
            <View style={styles.container}>
                <Pressable  
                    onPress={() => navigation.goBack()}
                    style={( { pressed }) => {
                        return{ opacity: pressed ? 0.5 : 1}
                    }}>
                    <Entypo name = "back" size={30}/>
                </Pressable>
                <Text style={styles.text}>
                   {/*Ajouter questions BDD*/}
                </Text>
            </View>

            <View style={styles.boutonsContainer}>
                <Pressable
                    onPress={() => {/* 1er bouton*/}}
                    style={( { pressed }) => {
                        return{ opacity: pressed ? 0.5 : 1}
                    }}>
                    <FontAwesome name = "circle" size={90} color="red"/>
                </Pressable>

                <Pressable
                onPress={() => {/* 1er bouton*/}}
                    style={( { pressed }) => {
                        return{ opacity: pressed ? 0.5 : 1}
                    }}>
                    <FontAwesome name = "circle" size={60} color="orangered"/>
                </Pressable>
            
                <Pressable
                onPress={() => {/* 1er bouton*/}}
                    style={( { pressed }) => {
                        return{ opacity: pressed ? 0.5 : 1}
                    }}>
                    <FontAwesome name = "circle" size={60} color="darkgrey"/>
                </Pressable>

                <Pressable
                onPress={() => {/* 1er bouton*/}}
                    style={( { pressed }) => {
                        return{ opacity: pressed ? 0.5 : 1}
                    }}>
                    <FontAwesome name = "circle" size={60} color="lime"/>
                </Pressable>

                <Pressable
                onPress={() => {/* 1er bouton*/}}
                    style={( { pressed }) => {
                        return{ opacity: pressed ? 0.5 : 1}
                    }}>
                    <FontAwesome name = "circle" size={90} color="limegreen" /> 
                </Pressable>
            </View>

            <View>
            <Pressable style={styles.text}
                onPress={() => {/* 1er bouton*/}}
                    style={( { pressed }) => {
                        return{ opacity: pressed ? 0.5 : 1}
                    }}>
                
                </Pressable>
            </View>
            
            <Pressable 
                onPress={() => {/* 1er bouton*/}}
                style={( { pressed }) => {
                    return{ opacity: pressed ? 0.5 : 1, ...styles.button} /*pour mettre un style qd y en a deja un*/
                }}>
                <Text style={styles.buttonText}>Valider</Text>
            </Pressable>
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
        
    },
    container: {
        backgroundColor: "#fff",
        padding: 16, 
        marginHorizontal: 15,
    },
    text: {
        height: 300,
        marginTop: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'darkcyan',
        textAlign: 'justify',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginLeft: 15,
        marginTop: 10,
        width: 75,
        height: 75,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    boutonsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 20,
        borderWidth: 1,
        marginHorizontal: 64,
        textAlign: 'center',
        backgroundColor: 'darkcyan',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    }

})