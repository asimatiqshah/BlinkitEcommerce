import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const MapTesting = () => {
    return (
        <View style={styles.container}>
            <Text>MapTesting</Text>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={(data)=>console.log(data)}
                >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    title={"Testing"}
                    onPress={(data)=>console.log(data.nativeEvent.coordinate)}
                />
            </MapView>
        </View>
    )
}
export default MapTesting;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})