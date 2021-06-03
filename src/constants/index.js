import * as Icon from '../component/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Trang chủ',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'Tìm kiếm',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Thư viện',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLISTBTN = [
  {
    title: 'Tạo Playlist',
    path: '/',
    ImgName: 'createPlaylist',
  },
  {
    title: 'Bài hát đã thích',
    path: '/favorite',
    ImgName: 'popularSong',
  }
]

export const LIBRARYTABS = [
  {
    title: 'Playlist',
    path: '/library'
  },
  // {
  //   title: 'Podcast',
  //   path: '/library/podcasts'
  // },
  {
    title: 'Nghệ sĩ',
    path: '/library/artists'
  },
  {
    title: 'Album',
    path: '/library/albums'
  }
]

export const LOGINBTN = [
  {
    title: 'Login',
    path: '/login'
  }
]