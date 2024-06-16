import * as React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image, ScrollView} from 'react-native';
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
                <Text style={styles.text}>Formations</Text>
                <ScrollView>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("Aero") }>
                        <Text style={styles.buttonText}>Aéronautique/Espace</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_cachan.png")}/>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Management") }>
                        <Text style={styles.buttonText}>Engineering management</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_troyes.png")}/>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Numerique") }>
                        <Text style={styles.buttonText}>Ingénierie du numérique</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_montpellier.png")}/>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Sante") }>
                        <Text style={styles.buttonText}>Ingénierie/Santé</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_saint-nazaire.png")}/>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Materiaux") }>
                        <Text style={styles.buttonText}>Matériaux/structures durables</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_dakar.png")}/>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Data") }>
                        <Text style={styles.buttonText}>Data Engineering</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_dakar.png")}/>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Environnement") }>
                        <Text style={styles.buttonText}>Energie/Environnement</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_dakar.png")}/>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("DesignIndus") }>
                        <Text style={styles.buttonText}>Design Industriel durable</Text>
                        <Image style={styles.image2} source={require("../../assets/images/campus_dakar.png")}/>
                    </Pressable>
                </ScrollView>
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