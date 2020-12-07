import React from 'react' // librairie react
import { StyleSheet, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native' 
import FilmItem from './FilmItems'
import { getFilmFromApiByText } from './tmdbApi'

class Search extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            films: [],
            isLoading: false,
            text: ""
        }
        this.SearchedText = ""
    }
    // loading.
    _loadFilms(){
        this.setState({ isLoading : true })
        if(this.state.text.length > 0){
            getFilmFromApiByText(this.state.text).then(data => 
                this.setState({
                    films: data.results,
                    isLoading: false
                })
            )
        }
    }

    _displayLoad(){
        if(this.state.isLoading){
            return (
                <View style={style.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    _searchTextInputChanged(text){
        this.SearchedText = text
        this.setState ({text})
    }

    render() {
        console.log(this.state.isLoading)
        return (
            <View style={ style.main_container }>
                <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={ style.textinput } placeholder="Search Movie..."/>
                {/* <Button style={style.Button} title="Search" onPress={() => this._loadFilms()}/> */}
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString() }
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
                {this._displayLoad()}
            </View>
        )
    }
}

const style = StyleSheet.create({

    main_container: {
        marginTop: 20,
        flex: 2
    },
    textinput: {
        marginLeft: 10, 
        width: '93%',
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search;