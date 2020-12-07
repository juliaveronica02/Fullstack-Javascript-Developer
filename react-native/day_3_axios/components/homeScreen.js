import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

function HomeScreen() {
    const [movie, setMovie] = useState([]);
    const URL =
      'https://api.themoviedb.org/3/trending/all/day?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b';
    useEffect(() => {
      axios
        .get(`${URL}`)
        .then((res) => {
          setMovie(res.data.results);
          console.log('res', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    console.log('movie', movie);
    const mapData = movie.map((item) => {
      const imageURL = 'https://image.tmdb.org/t/p/w500';
      // console.log("image", imageURL);
      return (
        <View style={styles.parent}>
          <View key={item.id} style={styles.child}>
            <Image
              source={{uri: `${imageURL}/${item.backdrop_path}`}}
              style={{
                height: 100,
                width: 120,
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 10,
              }}
            />
            <Text style={styles.container}>{item.title}</Text>
            <Text style={{color: '#777', paddingTop: 5, margin: 7}}>
              {item.overview}
            </Text>
            <Text style={styles.textLeft}>⭐: {item.vote_average}</Text>
            <Text style={styles.textRight}>💙: {item.popularity}</Text>
          </View>
        </View>
      );
    });
    return (
      <View>
        <View>
          <Text style={styles.allMovie}>All Movie</Text>
        </View>
        {/* <ScrollView horizontal={true}> */}
        <ScrollView>{mapData}</ScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      color: '#A9A9A9',
      paddingTop: 5,
      marginBottom: 2,
      fontSize: 20,
      textAlign: 'center',
    },
    allMovie: {
      color: 'white',
      fontWeight: 'bold',
      height: 80,
      width: '100%',
      fontSize: 30,
      paddingTop: 15,
      textAlign: 'center',
      backgroundColor: '#6262ff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    parent: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingBottom: 16,
      justifyContent: 'space-between',
    },
    child: {
      marginLeft: 5,
      backgroundColor: 'white',
      width: '100%',
      height: 350,
      aspectRatio: 1,
      marginBottom: 23,
    },
    textLeft: {
      position: 'absolute',
      left:0,
      bottom:0,
      color: '#A9A9A9',
      marginBottom: 20,
      paddingLeft: 15,
    },
    textRight: {
      paddingRight: 15,
      position: 'absolute',
      right: 0,
      bottom: 0,
      color: '#A9A9A9',
      marginBottom: 20,
    },
  });
  export default HomeScreen;