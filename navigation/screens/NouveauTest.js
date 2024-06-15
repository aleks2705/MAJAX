import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { ExcelRenderer } from 'react-excel-renderer';

export default function TestsScreen({ navigation }) {
    const [cellText, setCellText] = React.useState('');
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    const readExcelFile = (filePath) => {
        console.log('Lecture à ', filePath);
        ExcelRenderer(filePath, (err, resp) => {
            if (err) {
                console.error('Error:', err);
            } else {
                const rows = resp.rows;
                console.log('Il y a', rows);

                const questionsFromExcel = [];
                for (let i = 0; i < rows.length && i < 18; i++) {
                    if (rows[i] && rows[i][0]) { 
                        questionsFromExcel.push(rows[i][0]);
                    } else {
                        questionsFromExcel.push('No data found');
                    }
                }
                console.log('Question:', questionsFromExcel);
                setQuestions(questionsFromExcel);

                const initialText = questionsFromExcel[0];
                console.log('Text de A1:', initialText);
                setCellText(initialText);
            }
        });
    };

    React.useEffect(() => {
        const filePath = 'MAJAX/src/new.xlsx';
        console.log('Lecture.....');
        readExcelFile(filePath);
    }, []);

    const handleValiderPress = () => {
        const nextIndex = currentQuestionIndex + 1;
        console.log('ligne suivante:', nextIndex);
        
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
            const nextText = questions[nextIndex];
            console.log('texte suivant:', nextText);
            setCellText(nextText);
        } else {
            console.log('Fin des données');
            setCellText('FIn des questions');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/MAJAX.png")} resizeMode='contain' />
                <Image style={{ width: 50, height: 75, marginTop: 10, marginLeft: 200 }} source={require("../../assets/images/epf.jpg")} resizeMode='contain' />
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={({ pressed }) => {
                        return { opacity: pressed ? 0.5 : 1 }
                    }}>
                    <Entypo name="back" size={30} />
                </Pressable>
                <Text style={styles.text}>
                    {cellText}
                </Text>
            </View>

            <View style={styles.boutonsContainer}>
                <Pressable
                    onPress={() => { /* 1er bouton */ }}
                    style={({ pressed }) => {
                        return { opacity: pressed ? 0.5 : 1 }
                    }}>
                    <FontAwesome name="circle" size={90} color="red" />
                </Pressable>

                <Pressable
                    onPress={() => { /* 2e bouton */ }}
                    style={({ pressed }) => {
                        return { opacity: pressed ? 0.5 : 1 }
                    }}>
                    <FontAwesome name="circle" size={60} color="orangered" />
                </Pressable>

                <Pressable
                    onPress={() => { /* 3e bouton */ }}
                    style={({ pressed }) => {
                        return { opacity: pressed ? 0.5 : 1 }
                    }}>
                    <FontAwesome name="circle" size={60} color="darkgrey" />
                </Pressable>

                <Pressable
                    onPress={() => { /* 4e bouton */ }}
                    style={({ pressed }) => {
                        return { opacity: pressed ? 0.5 : 1 }
                    }}>
                    <FontAwesome name="circle" size={60} color="lime" />
                </Pressable>

                <Pressable
                    onPress={() => { /* 5e bouton */ }}
                    style={({ pressed }) => {
                        return { opacity: pressed ? 0.5 : 1 }
                    }}>
                    <FontAwesome name="circle" size={90} color="limegreen" />
                </Pressable>
            </View>

            <Pressable
                onPress={handleValiderPress}
                style={({ pressed }) => {
                    return { opacity: pressed ? 0.5 : 1, ...styles.button }
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
        textAlign: 'center', 
        justifyContent: 'center', 
        padding: 10, 
        color: 'white', 
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
});
