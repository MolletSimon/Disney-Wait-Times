import React, { useEffect, useState} from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    Alert,
    Text,
    View,
    AsyncStorage
} from 'react-native';

import Footer from "./components/footer";
import Park from "./screen/park";
import Ride from "./screen/ride";
import {BlurView} from "@react-native-community/blur";
import Swiper from 'react-native-swiper'
import {set} from "react-native-reanimated";

const App = () => {
    const [page, setPage] = useState("parc");
    const [favRides, setFavRides] = useState(null);

    const handleIndexChange = async(index) => {
        if (!await AsyncStorage.getItem("fav")) {
            setFavRides(null);
        } else {
            AsyncStorage.getItem("fav").then(favs => {
                const favorites = (JSON.parse(favs)).rides
                setFavRides(favorites);

            })
        }
    }

    return (
        <ImageBackground source={require('./assets/background2.jpg')} style={styles.imageBackground}>
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={8}
                reducedTransparencyFallbackColor="white"
            />
            {page === "ride" ? (
                <Ride setPage={setPage}/>
            ) : (
                <Swiper style={styles.wrapper}
                        loop={false}
                        activeDot={
                            <Image source={{uri: 'https://img.icons8.com/nolan/64/disney-movies-.png'}} style={styles.activeDot}/>
                        }
                        paginationStyle={styles.pagination}
                        bounces={true}
                        onIndexChanged={handleIndexChange}
                >
                    <View style={styles.slide}>
                        <Park page="parc" setPage={setPage} setFavRides={setFavRides}/>
                    </View>
                    <View style={styles.slide}>
                        <Park page="studios" setPage={setPage} setFavRides={setFavRides}/>
                    </View>
                    <View style={styles.slide}>
                        <Park page="fav" setPage={setPage} favRides={favRides} setFavRides={setFavRides}/>
                    </View>
                </Swiper>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: null,
        height: null
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeDot: {
        backgroundColor: 'white',
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    pagination: {
        backgroundColor: 'rgba(78,78,78,0.72)',
        width: '15%',
        padding: 3,
        borderRadius: 20,
        marginLeft: '43%',
        marginRight: '43%'
    }
});

export default App;
