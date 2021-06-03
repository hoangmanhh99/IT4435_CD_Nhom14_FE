import React, { useState, useEffect } from 'react';
import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import { connect } from 'react-redux';
import { changeTrack } from '../actions';
import TitleM from '../component/text/title-m'
import PlaylistCardF from '../component/cards/playlist-card-favorite';
import PlaylistCardM from '../component/cards/playlist-card-m';
import PlaylistCardP from '../component/cards/playlist-card-p';
import styles from "./home.module.css";

import { PLAYLIST } from '../data/index';
import albumAPI from '../api/album';
import songAPI from '../api/song';
function Home(props) {
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

  console.log('props: ', props)
  return (
    <div className={styles.Home}>
      <div className={styles.HoverBg}></div>
      <div className={styles.Bg}></div>

      <Topnav />
      <div className={styles.Content}>
        <section>
          <div className={styles.SectionTitle}>
            <TitleL>Bài hát yêu thích</TitleL>
          </div>

          <div className={styles.SectionCards}>
            {props?.favorite?.map((item) => {
              return (
                <PlaylistCardF
                  key={item.trackName}
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
const mapStateToProps = (state) => {
  return {
    trackData: state.trackData,
    isPlaying: state.isPlaying,
    favorite: state.favorite
  };
};

export default connect(mapStateToProps, { changeTrack })(Home);