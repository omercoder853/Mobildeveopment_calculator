import React from 'react';
import { styles } from './styles/global';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MainButtons({ mainButtons, handlePress, height, width, isHorizontal }) {
    let btn_height;
    let btn_width;
    if (isHorizontal) {
        btn_width = (width * 0.4 - 30) / 3
        btn_height = (height - 120) / 5
    }
    else {
        btn_width = (width * 0.75 - 30) / 3
        btn_height = (height * 0.55 - 120) / 5
    }
    const margin_btm = btn_height * 0.3
    return (
        <View style={styles.main_area}>
            {mainButtons.map((btn, ind) => (
                <TouchableOpacity key={ind} onPress={() => handlePress(btn.label, btn.action)}
                    style={[styles.default_button, { width: btn_width, height: btn_height, marginBottom: margin_btm }]}>
                    {btn.is_icon ? (<Feather name={btn.action} size={isHorizontal ? height * 0.05 : width * 0.08} color={btn.color} />) :
                        (<Text style={{ textAlign: 'center', color: btn.color, fontSize: isHorizontal ? height * 0.05 : width * 0.08 }}>{btn.label}</Text>)}
                </TouchableOpacity>
            ))}
        </View>
    )
}