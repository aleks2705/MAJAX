import * as React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Entypo from 'react-native-vector-icons/Entypo';

export default function FormationScreen({ navigation }) {
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
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Formation Screen</Text>
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
        
    }
})
