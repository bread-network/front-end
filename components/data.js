export const GA_TRACKING_ID = ''

export const pageVariants = {
  pageInitial: {
    backgroundColor: 'black',
    filter: `invert()`,
    opacity: 0,
  },
  pageAnimate: {
    backgroundColor: 'transparent',
    filter: ``,
    opacity: 1,
  },
  pageExit: {
    backgroundColor: 'black',
    filter: `invert()`,
    opacity: 0,
  },
}

export const pageMotionProps = {
  initial: 'pageInitial',
  animate: 'pageAnimate',
  exit: 'pageExit',
  variants: pageVariants,
}

export const defaultTitle = ''

export const defaultDescription = ''

export const structuredData = {
  '@id': '',
  '@context': 'https://schema.org',
  '@type': 'Website',
  name: defaultTitle,
  description: defaultDescription,
  url: '',
  logo: '',
}
