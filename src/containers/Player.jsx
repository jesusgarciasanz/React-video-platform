import React, {useEffect} from 'react';
import '../assets/styles/components/Player.scss'
import {connect} from 'react-redux'
import {getVideoSource} from '../actions'
import { Redirect } from 'react-router';

const Player = props => {
    const {id} = props.match.params;
    const hashPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id)
    }, []);

    return(
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    getVideoSource,
}

const mapStateToProps = state => {
    return{
        playing: state.playing,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)