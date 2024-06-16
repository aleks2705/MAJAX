import * as React from 'react'; // * = everything
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image, Dimensions } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Entypo from 'react-native-vector-icons/Entypo';


export default function SaintNazaire({navigation}) {
    const [searchText, setSearchText] = React.useState('');
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
            <View style={styles.header}>
                    <SearchBar searchText={searchText} onChangeText={setSearchText} />
                    <Pressable  
                        onPress={() => navigation.goBack()}
                        style={( { pressed }) => {
                            return{ opacity: pressed ? 0.5 : 1}
                        }}>
                        <Entypo name = "back" size={30}/>
                    </Pressable>
                </View>
                <Text 
                    style={styles.textTitle}>Saint-Nazaire
                </Text>
            </View>
            {/*<Image style={styles.image} source={require("../../assets/images/campus_paris_cachan2.jpeg")}/>*/}
            <View style={styles.containerText}>
                <Text style={styles.Text}>
                    C’est au sein du bâtiment d’Alembert, qui accueillait jusqu’en 2020 l’ENS Paris-Saclay, que l’EPF a posé ses valises.
                </Text>
                <Text style={{fontWeight: "bold", marginTop: 10}}>
                    Ce changement s’inscrit dans la volonté de développement de l’école, permettant d’améliorer les conditions d’études des élèves-ingénieurs et de leur offrir de nouvelles perspectives en matière de technologies et de vie étudiante.
                </Text>

                <Text style={{fontWeight: "bold", fontSize: 26, marginTop: 10}}>
                    L'EPF Paris-Cachan, campus du futur
                </Text>

                <Text style={styles.Text}>
                    Le campus de Paris-Cachan succède au site historique de Sceaux. Inauguré en janvier 2022, il se situe sur un campus regroupant d’autres écoles du territoire dans une « Alliance pour les Sciences et la Technologie ».
                </Text>
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
        
        backgroundColor: "#fff",
        padding: 16, // Add some padding to avoid touching edges
        
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    textTitle: {
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
    containerText: {
        marginLeft: 25,
        marginRight: 25,
    },
    Text: {
        textAlign: 'justify', 
        marginTop: 10,
    }
})