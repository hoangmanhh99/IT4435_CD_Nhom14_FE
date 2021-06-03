import React, { useState, useEffect } from 'react';
import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import TitleM from '../component/text/title-m'
import PlaylistCardS from '../component/cards/playlist-card-s';
import PlaylistCardM from '../component/cards/playlist-card-m';
import PlaylistCardP from '../component/cards/playlist-card-p';
import styles from "./home.module.css";

import { PLAYLIST } from '../data/index';
import albumAPI from '../api/album';
import songAPI from '../api/song';
function Home() {
    const [video, setVideo] = useState([]);

    const [album, setAlbum] = useState([]);
    useEffect(() => {

        rechieve_albumOnhome();
        rechieve_playlistOnhome();

    }, [])

    const rechieve_albumOnhome = async () => {
        let { data } = await albumAPI.getAlbumList(1, 10);
        if (data.success) {
            setAlbum(data.results);
            console.log('data album:', data);
        }
    }
    const rechieve_playlistOnhome = async () => {
        let { data } = await songAPI.getAllVideo(1, 10);
        if (data.success) {
            setVideo(data.results);
            console.log('datasong:', data);
        }
    }


    return (
        <div className={styles.Home}>
            <div className={styles.HoverBg}></div>
            <div className={styles.Bg}></div>

            <Topnav />
            <div className={styles.Content}>
                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>Bài hát</TitleL>
                    </div>

                    <div className={styles.SectionCards}>
                        {video.map((item) => {
                            return (
                                <PlaylistCardS
                                    key={item.title}
                                    data={item}

                                />
                            );
                        })}
                    </div>
                </section>

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleM>Album</TitleM>
                    </div>

                    <div className={styles.SectionCardsMedium}>
                        {album.slice(0, 6).map((item) => {
                            return (
                                <PlaylistCardM
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;