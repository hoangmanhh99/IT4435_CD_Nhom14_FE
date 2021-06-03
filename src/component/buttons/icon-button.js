import React from 'react';
// import * as Icons from '../icons';

import styles from './icon-button.module.css';

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }
  render() {
    const { activeFactorite, trackData } = this.props
    console.log('this.props.activeFactorite: ', activeFactorite?.favorite?.find(item => item.trackName === activeFactorite?.trackData?.trackName));
    if (activeFactorite) {
      return (
        <button
          className={`${styles.iconButton} ${activeFactorite?.favorite?.find(item => item.trackName === activeFactorite?.trackData?.trackName) ? "activeIcon" : ""}`}
          onClick={() => this.setState({ isActive: !activeFactorite?.favorite?.find(item => item.trackName === activeFactorite?.trackData?.trackName) })}
        >
          {activeFactorite?.favorite?.find(item => item.trackName === activeFactorite?.trackData?.trackName) ? this.props.activeicon : this.props.icon}
        </button>
      )
    } else {
      return (
        <button
          className={`${styles.iconButton} ${this.state.isActive ? "activeIcon" : ""}`}
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          {this.state.isActive ? this.props.activeicon : this.props.icon}
        </button>
      );
    }
  }

}
export default IconButton