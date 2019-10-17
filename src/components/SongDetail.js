import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if(!props.song){
        return <div>Please select a song</div>
    }
    return (
    <div>
        <h3>Details for:  </h3>
        <p>
            {props.song.title} :  {props.song.Artist} <br/> {props.song.duration}
        </p>
    </div>
    );
};

const mapStateToProps = (state) =>{
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);