import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../assets/utils/Constants";
import Logo from '../../assets/images/splash_logo.jpeg';
import { screenHeight, screenWidth } from "../../utils/Scalling";
const SplashScreen=()=>{
    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage} />
        </View>
    )
}
export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoImage:{
        width:screenWidth * 0.7,
        height:screenHeight * 0.7,
        resizeMode:'contain'
    }
}) 