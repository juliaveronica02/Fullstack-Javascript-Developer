import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from "axios"
import {useSelector} from "react-redux";
const Details = (props) => {
  const navigation = useNavigation();
  const movieId = useSelector(state => state.movie.movieId)
  const movieTitle = useSelector(state => state.movie.movieTitle)
  const movieImage = useSelector(state => state.movie.movieImage)
  const [movieDetail, setMovieDetail] = useState({}); // show single data like only one id.
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b&language=en-US`;
  useEffect(() => {
      if (movieId) {
        axios.get(URL)
        .then((res)=> {
            setMovieDetail(res.data);
        })
        .catch((err)=> {
            console.log("error",err);
        })
      }
  }, [movieId])
console.log("text", props.route.params);
console.log("title",movieTitle);
const imageURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Details</Text>
      </TouchableOpacity>
      <View>
              <Text>
                {movieDetail.original_title}
              </Text>
              <Text>
                  {movieTitle}
              </Text>
            </View>
            <View>
              <Image
                source={{uri: movieImage }}
                style={{width: 70, height: 81}}
              />
            </View>
    </View>
  );
};

export default Details;
