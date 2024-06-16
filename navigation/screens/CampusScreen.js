import * as React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Entypo from 'react-native-vector-icons/Entypo';

export default function CampusScreen({ navigation }) {
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
                <Text style={styles.text}>Campus</Text>
                
                <Pressable style={styles.button} onPress={() => navigation.navigate("ParisCachan") }>
                    <Text style={styles.buttonText}>Paris-Cachan</Text>
                    <Image style={styles.image2} source={require("../../assets/images/campus_cachan.png")}/>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("Troyes") }>
                    <Text style={styles.buttonText}>Troyes</Text>
                    <Image style={styles.image2} source={require("../../assets/images/campus_troyes.png")}/>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("Montpellier") }>
                    <Text style={styles.buttonText}>Montpellier</Text>
                    <Image style={styles.image2} source={require("../../assets/images/campus_montpellier.png")}/>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("SaintNazaire") }>
                    <Text style={styles.buttonText}>Saint-Nazaire</Text>
                    <Image style={styles.image2} source={require("../../assets/images/campus_saint-nazaire.png")}/>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("Dakar") }>
                    <Text style={styles.buttonText}>Dakar</Text>
                    <Image style={styles.image2} source={require("../../assets/images/campus_dakar.png")}/>
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/MAJAX.png")}/>
                <Image style={{width: 100, height: 100, marginTop: 170, marginLeft:15}} source={require("../../assets/images/epf.jpg")}/>
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    text: {
        marginTop: 10,
        textAlign: 'center', 
        fontSize: 26, 
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        borderRadius: 6,
        borderColor: 'black',
        marginHorizontal: 34,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonText: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    image: {
        marginLeft: 40,
        marginTop: 150,
        width: 150,
        height: 150,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    image2: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginLeft: 10,
    },
    
})