import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, sizes }) => ({
  'overlay': {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: `${backgrounds.default}`,

    padding: '5% 0 0',
    textAlign: 'center',
    textShadow: `1px 2px 2px rgba(#000, 0.5)`,
    fontSize: `${sizes.text}`,

    '& h3': {
      fontStyle: 'italic',
      fontWeight: '300'
    },

    '& img': {
      width: '250px',
      height: '250px',
      opacity: '.4'
    }
  }
}))
