import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {
    const [calcDisplay, setCalcDisplay] = useState("789")
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Calculator App</Text>

            <TextInput style={styles.resultText}
                onChangeText={(digit) => setCalcDisplay(digit)} value={calcDisplay} />

            <View style={styles.btnsWrapper}>
                <TouchableOpacity style={styles.claerBtttnStyle}>
                    <Text style={styles.btnText}>AC</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>/</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>%</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>9</Text>
                </TouchableOpacity>
    

                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.btnText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.equalBtnStyle}>
                    <Text style={styles.btnText}>=</Text>
                </TouchableOpacity>
      
            </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    claerBtttnStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 12,
        backgroundColor: 'orange'
    },
    container: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 14,
    },
    screenTitle: {
        paddingVertical: 12,
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 28,
        color: 'green'
    },
    btnstyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 12,
        backgroundColor: 'green'
    },
    equalBtnStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: "100%",
        borderRadius: 12,
        backgroundColor: 'green'
    },
    operatorBtnStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 12,
        backgroundColor: '#00635D'
    },
    btnText: {
        color: 'white',
        marginVertical: 12,
        marginHorizontal: 12,
        fontSize: 24,
        fontWeight: 600,

    },
    resultText: {
        textAlign: 'right',
        fontWeight: 600,
        fontSize: 24,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 12,


    },
    btnsWrapper: {
        paddingVertical: 12,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,

    }

})