import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "black",
    },
    display_container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'flex-start',
    },
    button_container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        alignItems: 'center',
        backgroundColor: '#262a33',
        borderTopStartRadius: 40,
        paddingTop: 30

    },
    main_area: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 3,
        justifyContent: 'flex-end',
    },
    side_area: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    default_button: {
        padding: 10,
        backgroundColor: '#262a33',
        borderRadius: 25,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eeeeee37',
    },
    input_area: {
        width: '100%',
        marginBottom: 10
    },
    input: {
        textAlign: 'right',
        marginTop: 'auto',
        marginLeft: 'auto',
        color: 'white',
    },
    output: {
        textAlign: 'right',
        marginTop: 'auto',
        marginLeft: 'auto',
        color: 'white'
    }
})