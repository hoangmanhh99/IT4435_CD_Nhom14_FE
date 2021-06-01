import React, { useState, useEffect } from 'react';
import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import TitleM from '../component/text/title-m'
import PlaylistCardS from '../component/cards/playlist-card-s';
import PlaylistCardM from '../component/cards/playlist-card-m';

import styles from "./home.module.css";

import { PLAYLIST } from '../data/index'
import songAPI from '../api/song';
function Home(){
    const [listVideo, setListVideo] = useState([]);
    

    useEffect(() => {
        
            rechieveMusicVideosOnhome();
      
    }, [])

    const rechieveMusicVideosOnhome = async () => {
        let {data} = await songAPI.getAllVideo(1, 20);
        if(data.success){
            setListVideo(data.results);
            console.log('data:',data);
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
                        <TitleL>Dành cho bạn</TitleL>
                    </div>

                    <div className={styles.SectionCards}>
                        {PLAYLIST.map((item) => {
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
                        <TitleM>Top thịnh hành</TitleM>
                    </div>
                    
                    <div className={styles.SectionCardsMedium}>
                        {PLAYLIST.slice(0, 6).map((item) => {
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