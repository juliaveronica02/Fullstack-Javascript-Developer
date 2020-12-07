import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Modal from '../components/Details/modal';
import * as Animatable from 'react-native-animatable';
import Details from './Details/Detail';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { getMovieId, getMovieTitle, getMovieImage } from './Redux/Action';
function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [movie, setMovie] = useState([]);
  const [modalVisible, setModalVisible] = useState({
    id: null,
    isShow: false,
  });
  const URL =
    'https://api.themoviedb.org/3/trending/all/day?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b';
  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => {
        setMovie(res.data.results);
        // console.log('res', res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log('movie', movie);
  const mapData = movie.map((item) => {
    const imageURL = 'https://image.tmdb.org/t/p/w500';
    // console.log("image", imageURL);
    return (
      <TouchableOpacity
        onPress={() => setModalVisible({id: item.id, isShow: true})}
        key={item.id}
        style={styles.container}>
        {/* <Animatable.View animation="zoomIn"> */}
        <View style={styles.thumbnail}>
          <Image
            source={{uri: `${imageURL}/${item.backdrop_path}`}}
            style={{width: 70, height: 81}}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.textLeft}>{item.media_type}</Text>
          <Text style={styles.textRight}>⭐: {item.vote_average}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(getMovieTitle(item.title))
            dispatch(getMovieId(item.id))
            dispatch(getMovieImage(`${imageURL}/${item.backdrop_path}`))
            navigation.navigate('Details', {
              id: item.id,
            });
          }}>
          <Text>Details</Text>
        </TouchableOpacity>
        {/* </Animatable.View> */}
      </TouchableOpacity>
    );
  });
  // console.log("modal", modalVisible);
  return (
    <View>
      <View>
        <Text style={styles.allMovie}>Trending</Text>
      </View>
      {/* <ScrollView horizontal={true}> slide to left and right.*/}
      {/* vertical scroll: scrollview. */}
      <ScrollView
        style={{backgroundColor: '#92a8d1', paddingTop: 3, marginBottom: 60}}>
        {mapData}
      </ScrollView>
      {/* <Modal
        modal={modalVisible}
        closeModal={(e) => {
          setModalVisible({id: null, isShow: false});
        }}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  allMovie: {
    fontFamily: 'Shadows Into Light',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width: '100%',
    fontSize: 30,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  container: {
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    marginTop: 7,
    textAlign: 'center',
    backgroundColor: '#AED6F1',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
  thumbnail: {
    margin: 10,
    paddingLeft: 5,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 4,
    paddingRight: 5,
    textAlign: 'center',
    color: '#2471A3',
  },
  textRight: {
    paddingRight: 15,
    position: 'absolute',
    right: 0,
    bottom: 0,
    color: '#A9A9A9',
    marginBottom: 10,
  },
  textLeft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    color: '#A9A9A9',
    marginBottom: 10,
    paddingLeft: 15,
    textTransform: 'capitalize',
  },
});
export default HomeScreen;
