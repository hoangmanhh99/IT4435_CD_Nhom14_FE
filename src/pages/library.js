import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import TitleM from '../component/text/title-m';
import Topnav from '../component/topnav/topnav';
import PlaylistCardM from '../component/cards/playlist-card-m';
import PlaylistCardP from '../component/cards/playlist-card-p';
import PlaylistCardC from '../component/cards/playlist-card-c';
import { PLAYLIST } from "../data/index";

import styles from "./library.module.css";
import albumapi from '../api/album';
import songAPI from '../api/song';
function Library(){
    return (
        <div className={styles.LibPage}>
                <Topnav tabButtons={true}/>
                <div className={styles.Library}>
                        <Route exact path="/library"><PlaylistTab /></Route>
                        <Route path="/library/podcasts"><PodcastTab /></Route>
                        <Route path="/library/artists"><ArtistTab /></Route>
                        <Route path="/library/albums"><AlbumTab /></Route>
                </div>
        </div>
    );
}

function PlaylistTab(){
    const [playlist, setPlayList] = useState([]);
    useEffect(async() => {
        let {data} = await songAPI.getAllVideo(1,12);
        if(data.success){
            setPlayList(data.results);
            console.log('data:1',data);
        }
    }, [])
    return (
        <div>
            <TitleM>Playlist</TitleM>
            <div className={styles.Grid}>
                {playlist.map((item) => {
                    return (
                        <PlaylistCardP 
                            key={item.title}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function PodcastTab(){
    return (
        <div>
            <TitleM>Podcast'ler</TitleM>
            <div className={styles.Grid}>
                {PLAYLIST.filter(item => item.type == 'podcast').map((item) => {
                    return (
                        <PlaylistCardC
                            key={item.title}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function ArtistTab(){
    return (
        <div>
            <TitleM>Sanatçılar</TitleM>
        </div>
    );
}

function AlbumTab(){
    const [albums, setAlbum] = useState([]);
    useEffect(async() => {
        let {data} = await albumapi.getAlbumList(1,20);
        if(data.success){
            setAlbum(data.results);
            console.log('data:',data);
        }
    }, [])

    return (
        <div>
            <TitleM>Album</TitleM>
            <div className={styles.Grid}>
                {albums.map((item) => {
                    return (
                        <PlaylistCardM 
                            key={item.name}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Library;