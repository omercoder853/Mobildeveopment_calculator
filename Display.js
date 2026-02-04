import React from 'react';
import { styles } from './styles/global';
import { View, TextInput } from 'react-native';

export default function Display({ isHorizontal, height, width, display, output }) {
    return (
        <View style={[styles.display_container, isHorizontal ? { width: width * 0.4, height: '100%', marginRight: width * 0.02, marginBottom: 'auto' } : { height: height * 0.4, width: '100%',justifyContent: 'flex-end', }]}>
            <View style={[styles.input_area]}>
                <TextInput editable={false} value={display} multiline={true}
                    style={[styles.input, isHorizontal ? { fontSize: height * 0.13 } : { fontSize: width * 0.13 }]} />
            </View>
            <View style={[styles.input_area]}>
                <TextInput editable={false} value={output} multiline={true}
                    style={[styles.output, isHorizontal ? { fontSize: height * 0.09 } : { fontSize: width * 0.09 }]} />
            </View>
        </View>
    )
}
