import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {
    const [calcDisplay, setCalcDisplay] = useState("0");
    const handleResult = () => {
        const d = eval(calcDisplay)

        setCalcDisplay(d.toString())


    }

    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Calculator App</Text>

            <TextInput style={styles.resultText}
                onChangeText={(digit) => setCalcDisplay(digit)} value={calcDisplay} />

            <View style={styles.btnsWrapper}>
                <TouchableOpacity onPress={() => { setCalcDisplay("") }} style={styles.claerBtttnStyle}>
                    <Text style={styles.btnText}>AC</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "+") }} style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "-") }} style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "*") }} style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "1") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "2") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "3") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "/") }} style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "4") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "5") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "6") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "%") }} style={styles.operatorBtnStyle}>
                    <Text style={styles.btnText}>%</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "7") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "8") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "9") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>9</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { setCalcDisplay(calcDisplay + "0") }} style={styles.btnstyle}>
                    <Text style={styles.btnText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleResult}
                    style={styles.equalBtnStyle}>
                    <Text style={styles.btnText}>=</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({

    claerBtttnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 12,
        backgroundColor: 'orange'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',

        paddingVertical: 12,
        paddingHorizontal: 18,
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
    equalBtnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: "100%",
        borderRadius: 12,
        backgroundColor: '#00635D'
    },
    operatorBtnStyle: {
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
        marginTop: 50,
        marginBottom: 40,
        textAlign: 'right',
        height: 100,
        fontWeight: 600,
        fontSize: 24,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,


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