import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';

export default class SettingsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.show();
        });
        this.blurListener = this.props.navigation.addListener('blur', () => {
            this.close();
        });
    }

    componentWillUnmount() {
        this.focusListener();
        this.blurListener();
    }

    show = () => {
        this.setState({ show: true });
    }

    close = () => {
        this.setState({ show: false });
    }

    render() {
        let { show } = this.state;
        return (
            <Modal 
                isVisible={show} 
                onBackdropPress={this.close} 
                style={styles.modal}
                animationIn="slideInUp"
                animationOut="slideOutDown">

                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <Pressable 
                            onPress={this.close}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            
                            <Entypo name="back" size={30} color="white" />
                        </Pressable>
                        <Text style={styles.text}>Option</Text>
                    </View>
                    
                    <Pressable style={styles.buttons}>
                        <Text style={styles.textButtons}>
                            Langue: France
                        </Text>
                        <Entypo name="chevron-right" size={15} color="white" />
                    </Pressable>

                    <Pressable style={styles.buttons}>
                        <Text style={styles.textButtons}>
                            Sélectionner un thème
                        </Text>
                        <Entypo name="chevron-right" size={15} color="white" />
                    </Pressable>

                    <Pressable style={styles.buttons}>
                        <Text style={styles.textButtons}>
                            CGU
                        </Text>
                        <Entypo name="chevron-right" size={15} color="white" />
                    </Pressable>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'grey',
        padding: 22,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,

    },
    text: {
        color: 'white',
        fontSize: 20,
        marginLeft: 100, 
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 10,
        backgroundColor: 'black',
        borderRadius: 6,
        paddingHorizontal: 10, 
        paddingVertical: 15,
    },
    textButtons: {
        color: 'white',
        fontSize: 20,
    }
});
