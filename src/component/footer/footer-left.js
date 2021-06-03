import { connect } from "react-redux";
import * as Icons from '../icons';
import TextRegularM from '../text/text-regular-m';
import { changeFavorite } from '../../actions';
import IconButton from '../buttons/icon-button';

import styles from "./footer-left.module.css";

function FooterLeft(props) {
    console.log('propsaaa: ', props);
    return (
        <div className={styles.footerLeft}>
            <ImgBox
                trackData={props.trackData}
            />
            <SongDetails
                trackData={props.trackData}
            />
            <div onClick={() => props.changeFavorite(props.trackData)}><IconButton icon={<Icons.Like />} activeFactorite={props} activeicon={<Icons.LikeActive />} /></div>
            <IconButton icon={<Icons.Corner />} activeicon={<Icons.Corner />} />
        </div >
    );
}

function ImgBox({ trackData }) {
    return (
        <div className={styles.imgBox}>
            <img src={trackData.trackImg} alt="Gavurlar" />
        </div>
    );
}

function SongDetails({ trackData }) {
    return (
        <div className={styles.songDetails}>
            <TextRegularM>{trackData.trackName}</TextRegularM>
            <TextRegularM><small>{trackData.trackArtist}</small></TextRegularM>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        trackData: state.trackData,
        favorite: state.favorite
    };
};

export default connect(mapStateToProps, { changeFavorite })(FooterLeft);