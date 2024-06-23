import * as React from 'react'; // * = everything
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';
import SearchBar from '../../components/SearchBar';
import SettingsScreen from '../../components/SettingsScreen';

export default function ResultsScreen({navigation}) {
    const [searchText, setSearchText] = React.useState('');

    const onSubmitSearch = () => {
        if (searchText.toLowerCase() === 'paris-cachan') {
            navigation.navigate('ParisCachan');
        } else if (searchText.toLowerCase() === 'montpellier') {
            navigation.navigate('Montpellier');
        } else if (searchText.toLowerCase() === 'troyes') {
            navigation.navigate('Troyes');
        } else {
            alert('Campus not found');
        }
    };
    
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar searchText={searchText} onSubmitSearch={onSubmitSearch} onChangeText={setSearchText} />
                <Text 
                    style={styles.text}>Résultats
                </Text>
                <View style={styles.anciensResultats}>
                    <Text style={{textDecorationLine: 'underline', fontWeight: 'bold',}}>Anciens resultats:</Text>{/* données a enrregistrer dans un cloud?? */}
                   <View >
                        <Text>Resultat du XXX</Text>
                   </View>

                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../../assets/images/MAJAX.png")} resizeMode='contain'/>
                    <Image style={{width: 100, height: 100, marginTop: 170, marginLeft: 15}} source={require("../../assets/images/epf.jpg")} resizeMode='contain'/>
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
    image: {
        marginLeft: 15,
        marginTop: 150,
        width: 150,
        height: 150,
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