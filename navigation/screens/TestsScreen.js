import * as React from 'react'; // * = everything
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';
import SearchBar from '../../components/SearchBar';

export default function TestsScreen({navigation}) {
    const [searchText, setSearchText] = React.useState('');
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar searchText={searchText} onChangeText={setSearchText} />
                <Text style={styles.text}>Tests</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate("NouveauTest") }>
                    <Text style={styles.buttonText}>Demarrer un nouveau Test</Text>
                </Pressable>
                <Text style={styles.text2}>
                    Le test d'orientation de l'EPF est conçu pour aider les étudiants à choisir la spécialisation en ingénierie ui leur convient le mieux à l'EPF. Il évalue leurs compétences, intérêts et motivations à travers une série de questions et d'activités. L'objectif est de guider chaque étudiant vers la formation qui correspond le mieux à ses aptitudes et ses aspirations professionnelles, facilitant ainsi une décision éclairée sur leur future carrière en ingénierie

                </Text>
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/MAJAX.png")} resizeMode='contain'/>
                <Image style={{width: 100, height: 100, marginTop: 170, marginLeft:15}} source={require("../../assets/images/epf.jpg")} resizeMode='contain'/>
                </View>
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
    text: {
        marginTop: 10,
        textAlign: 'center', 
        fontSize: 26, 
        fontWeight: 'bold',
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
        marginHorizontal: 34,
    },
    text2: {
        marginTop: 30,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        textAlign: 'justify',
    },
    image: {
        marginLeft: 15,
        marginTop: 150,
        width: 150,
        height: 150,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    
})