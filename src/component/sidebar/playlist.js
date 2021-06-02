import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import styles from './playlist.module.css';

import TitleS from '../text/title-s';
import TextRegularM from '../text/text-regular-m';
import PlaylistButton from './playlist-button';
import { PLAYLISTBTN } from '../../constants';
import { PLAYLIST } from '../../data';
import songAPI from '../../api/song';
function Playlist() {
  const [video, setVideo] = useState([]);

  useEffect(() => {

    rechieve_playlistOnhome();

  }, [])
  const rechieve_playlistOnhome = async () => {
    let { data } = await songAPI.getAllVideo(1, 20);
    if (data.success) {
      setVideo(data.results);
      console.log('datasong2:', data);
    }
  }
  return (
    <div className={styles.Playlist}>
      <TitleS>Mục của bạn</TitleS>

      <div>
        {PLAYLISTBTN.map((playlist) => {
          return (
            <PlaylistButton
              href={playlist.path}
              ImgName={playlist.ImgName}
              key={playlist.title}
            >
              {playlist.title}
            </PlaylistButton>
          );
        })}
      </div>

      <hr className={styles.hr} />

      {/* <div>
          {PLAYLIST.map((list) => {
            return (
              <Link to={`/playlist/${list.link}`} key={list.title}>
                  <TextRegularM>{list.title}</TextRegularM>
              </Link>
            );
          })}
        </div> */}
    </div>
  );
}

export default Playlist;