import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NativeBaseProvider, Box, Center, extendTheme} from "native-base";

const newColorTheme = {
    brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
    },
};

const theme = extendTheme({colors: newColorTheme});

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Center flex={1}>
                <Box>Hello world</Box>
            </Center>
        </NativeBaseProvider>
    );
}


