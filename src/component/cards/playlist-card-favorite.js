import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeTrackSong } from '../../actions';
import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-s.module.css";

function PlaylistCardS(props) {
    const [isthisplay, setIsthisPlay] = useState(false)

    function changeTheme() {
        document.documentElement.style.setProperty('--hover-home-bg', props.data.hoverColor);
    }

    useEffect(() => {
        setIsthisPlay(props.data?.file?.path === props.trackData.trackKey)
    })
    console.log('propsFatorite: ', props);
    return (
        <div className={styles.PlaylistCardSBox}>
            {/* <Link to={`/playlist/${props.data.link}`} onMouseOver={changeTheme}> */}
            <div
                style={{ cursor: 'pointer' }}
                className={styles.PlaylistCardS}
                onMouseOver={changeTheme}>
                <div className={styles.ImgBox}>
                    <img src={props.data?.trackImg} alt={props?.data?.trackName} />
                </div>
                <div className={styles.Title}>
                    <TextBoldL>{props?.data?.trackName}</TextBoldL>
                </div>
            </div>
            {/* </Link> */}
            <div
                onClick={() => props.changeTrackSong({
                    path: props.data?.track,
                    title: props?.data?.trackName,
                    name: props?.data?.trackName,
                    singers: props?.data?.trackArtist,
                    image: props?.data?.trackImg
                })}
                className={`${styles.IconBox} ${isthisplay && props.isPlaying ? styles.ActiveIconBox : ''}`}
            >
                <PlayButton isthisplay={isthisplay} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        trackData: state.trackData,
        isPlaying: state.isPlaying
    };
};

export default connect(mapStateToProps, { changeTrackSong })(PlaylistCardS);