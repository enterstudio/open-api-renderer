import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, text, sizes }) => ({
  'navigationMethod': {
    display: 'flex',
    padding: '.7rem 1.5rem',
    fontSize: `${sizes.text}`
  },
  'active': {
    backgroundColor: `${backgrounds.schema}`
  },
  'open': {
    display: 'flex'
  },
  'closed': {
    display: 'none'
  },
  'type': {
    width: '6rem',
    '&.get': {
      color: `${text.get}`
    },
    '&.post': {
      color: `${text.post}`
    },
    '&.put': {
      color: `${text.put}`
    },
    '&.delete': {
      color: `${text.delete}`
    }
  },
  'title': {
    width: 'calc(100% - 6rem)'
  }
}))
