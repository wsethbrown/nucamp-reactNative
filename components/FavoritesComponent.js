import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {ListItem} from react-native-elements;
import {connect} from 'react-redux';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        favorites: state.favorites
    }
}

class Favorite extends Component {
    static navigationOptions = {
        title: 'My Favorites'
    }

    render() {
        const {navigate} = this.props.navigation
        const renderFavoriteItem = {{item}} => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={() => navigate('CampsiteInfo', {campsiteId: item.id})}
                />
            )
        }
    }
}