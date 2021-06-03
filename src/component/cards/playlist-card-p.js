import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeTrackSong } from '../../actions';
import { Link } from "react-router-dom";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from '../text/text-regular-m';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-m.module.css";
//Library->Playlist
function PlaylistCardP(props) {
	const [isthisplay, setIsthisPlay] = useState(false)

	useEffect(() => {
		setIsthisPlay(props.data?.file?.path === props.trackData.trackKey)
	})

	return (
		<div className={styles.PlaylistCardSBox}>
			{/* <Link to={`/playlist/${props.data.link}`}> */}
			<div style={{ cursor: 'pointer' }} className={styles.PlaylistCardS}>
				<div className={styles.ImgBox}>
					<img src={props.data?.cover_image?.path} alt={props.data.title} />
				</div>
				<div className={styles.Title}>
					<TextBoldL>{props?.data?.name}</TextBoldL>
					<TextRegularM>{props.data?.Singers}</TextRegularM>
				</div>
			</div>
			{/* </Link> */}
			<div
				onClick={() => props.changeTrackSong({
					path: props.data?.file?.path,
					title: props?.data?.title,
					name: props?.data?.name,
					singers: JSON.parse(props?.data?.singers),
					image: props?.data?.cover_image?.path
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

export default connect(mapStateToProps, { changeTrackSong })(PlaylistCardP);
