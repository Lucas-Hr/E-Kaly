import React from "react";
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const CheckBox = ({checked, onChange}) => {
    return (
        <TouchableOpacity onPress={onChange} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, checked && styles.checked]}>
                {checked && <Text style={styles.checkmark}>✓</Text>}
            </View>
        </TouchableOpacity>
    );
}

const CustomCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
  };

  return(
    <View style={styles.container}>
        <CheckBox checked={isChecked} onChange={handleCheckboxChange} />
    </View>
  );
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#A40E2A',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: 'white', // Set the background color to red
        borderColor: '#A40E2A', // Set the border color to red when checked
    },
    checkmark: {
        color: '#A40E2A',
        fontWeight: 'bold',
    },
  });

export default CustomCheckBox;