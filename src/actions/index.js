export const PLAYPAUSE = "PLAYPAUSE";
export const CHANGETRACK = "CHANGETRACKSONG";
export const CHANGETRACKSONG = "CHANGETRACKSONG";

export const changePlay = (isPlaying) => {
  return { type: PLAYPAUSE, payload: isPlaying };
};

export const changeTrack = (trackKey) => {
  console.log('track: ', trackKey);
  return { type: CHANGETRACK, payload: trackKey };
};
export const changeTrackSong = (trackKey) => {
  console.log('track: ', trackKey);
  return { type: CHANGETRACK, payload: trackKey };
};
