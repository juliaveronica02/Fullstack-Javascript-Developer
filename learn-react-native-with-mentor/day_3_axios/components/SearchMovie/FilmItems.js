import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {getImageFromApi} from './tmdbApi';

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
      <View style={style.main_container}>
        <View style={style.container_left}>
          <Image
            style={style.container_left_image}
            source={{uri: getImageFromApi(film.poster_path)}}
          />
        </View>
        <View style={style.container_right}>
          <View style={style.container_right_top}>
            <Text style={style.container_right_top_text}>{film.title}</Text>
            <Text style={style.container_right_top_vote}>
              ⭐: {film.vote_average}
            </Text>
          </View>
          <View style={style.container_right_middle}>
            {/* numberOfLines = length of the text. */}
            <Text
              style={style.container_right_middle_overview}
              numberOfLines={4}>
              {film.overview}
            </Text>
          </View>
          <View style={style.container_right_bottom}>
            <Text style={style.container_right_bottom_date}>
              Release: {film.release_date}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  main_container: {
    height: 190,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#AED6F1',
    margin: 10,
    borderRadius: 10,
  },
  container_left: {
    flex: 1,
  },
  container_left_image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
  },
  container_right: {
    flex: 2,
  },
  container_right_top: {
    flex: 2,
    flexDirection: 'row',
  },
  container_right_top_text: {
    flex: 2,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
  },
  container_right_top_vote: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 15,
  },
  container_right_middle: {
    flex: 3,
  },
  container_right_middle_overview: {
    marginRight: 18,
    marginLeft: 20,
    marginBottom: 2,
    color: 'grey',
  },
  container_right_bottom: {
    flex: 1,
  },
  container_right_bottom_date: {
    textAlign: 'right',
    color: 'grey',
    margin: 5,
  },
});

export default FilmItem;
