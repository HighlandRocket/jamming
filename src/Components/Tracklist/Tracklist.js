import React from 'react';
import {Track} from '../Track/Track.js';
import './Tracklist.css';


export class TrackList extends React.Component {
    render() { 
        return (
            <div className='TrackList'>
                
                {
                     this.props.tracks.map(track => {
                        return <Track track={track} preview={track.preview} key={track.id} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove}/>
                            
                    })
                }
                
                
            </div>
        )
    }
};

