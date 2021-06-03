import { PLAYLIST } from "../data/index";
import { PLAYPAUSE, CHANGETRACK, CHANGETRACKSONG, FAVORITE } from "../actions/index";
import favorite from "../pages/favorite";

const INITIAL_STATE = {
  trackData: {
    trackKey: [0, 0],
    track: `${PLAYLIST[0].playlistData[0].link}`,
    trackName: `${PLAYLIST[0].playlistData[0].songName}`,
    trackImg: `${PLAYLIST[0].playlistData[0].songimg}`,
    trackArtist: `${PLAYLIST[0].playlistData[0].songArtist}`
  },
  isPlaying: false,
  favorite: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYPAUSE:
      return {
        ...state,
        isPlaying: action.payload
      };
    case CHANGETRACKSONG:
      return {
        ...state,
        trackData: {
          ...state.trackData,
          trackKey: action.payload.path,
          track: action.payload.path,
          trackName: action.payload?.name,
          trackImg: action.payload?.image,
          trackArtist: action.payload?.singers?.name,
        }
      };
    case CHANGETRACK:
      return {
        ...state,
        trackData: {
          ...state.trackData,
          trackKey: action.payload,
          track: `${PLAYLIST[action.payload[0]].playlistData[action.payload[1]].link
            }`,
          trackName: `${PLAYLIST[action.payload[0]].playlistData[action.payload[1]].songName
            }`,
          trackImg: `${PLAYLIST[action.payload[0]].playlistData[action.payload[1]].songimg
            }`,
          trackArtist: `${PLAYLIST[action.payload[0]].playlistData[action.payload[1]].songArtist
            }`
        }
      };
    case FAVORITE:
      console.log('redux: ', action.payload, state.favorite);
      if (!state.favorite?.find(item => action.payload.trackName === item.trackName)) {
        return {
          ...state,
          favorite: [
            ...state.favorite,
            action.payload
          ]
        };
      } else {
        return {
          ...state,
          favorite: state.favorite?.filter(item => action.payload.trackName !== item.trackName)
        };
      }
    default:
      return state;
  }
};
