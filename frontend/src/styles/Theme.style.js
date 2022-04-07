const mediaSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const theme = {
  color: {
    black: '#000000',
    lightblack: '#191414',
    green: '#22db63',
    lightgreen: '#32df6f',
    white: '#ffffff',
    deepgrey: '#535353',
    lightgrey: '#B3B3B3',
  },
  device: {
    mobileS: `(min-width: ${mediaSize.mobileS})`,
    mobileM: `(min-width: ${mediaSize.mobileM})`,
    mobileL: `(min-width: ${mediaSize.mobileL})`,
    tablet: `(min-width: ${mediaSize.tablet})`,
    laptop: `(min-width: ${mediaSize.laptop})`,
    laptopL: `(min-width: ${mediaSize.laptopL})`,
    desktop: `(min-width: ${mediaSize.desktop})`,
  }
}