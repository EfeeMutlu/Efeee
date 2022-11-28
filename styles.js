import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
    },

    title: {
        fontSize: 30,
        marginTop: 25,
        textAlign: "center",
        fontWeight: "bold",
        flexDirection: "row",

    },
    subtitle: {
        fontSize: 16,
        marginTop: 20,
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 10,
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        fontSize: 15,
        marginTop: 10,
    },
    buttonContainer: {
        backgroundColor: "#00c55c",
        borderRadius: 5,
        paddingHorizontal: 7,
        paddingVertical: 7,
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: 8,
    },
    buttonText: {
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 10,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingVertical: 7,
    },
    taskText: {
        fontSize: 18,
    },
    taskDelete: {
        width: 25,
        height: 25,
        borderRadius: 14,
        backgroundColor: "#ca0200",
        justifyContent: "center",
        alignItems: "center",
    },
    taskDeleteText: {
        fontSize: 18,
        color: "white",
    },
    // header: {
    //     width: 30,
    //     height: 30,
    // },
});