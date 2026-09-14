export const thespian = {
  eyebrow: 'Personal project · React',
  title: 'Thespian',
  lede: 'Thespian is a React app I built to learn - search and browse film and TV titles from public metadata APIs. It isn’t a live product, and it’s still in progress.',
  marquee: [
    'REACT',
    'PUBLIC METADATA APIS',
    'SEARCH-TO-DETAIL ROUTING',
    'SERVERLESS API PROXY',
    'LEARNING EXERCISE',
  ],
  why: 'I wanted to learn React by shipping something larger than a tutorial: real routes, real third-party data, and a layout that had to hold together past the first screen. Film and TV catalogues were a domain I already cared about, so the work became a title explorer - search, scan a grid, open a page, and explore.',
  learn: [
    'Components, state, and effects',
    'Routing from search to a title page',
    'Keeping API keys off the client',
    'Talking to third-party REST APIs',
    'A three-part layout: home, results, detail',
  ],
  how: 'Search sits on the home view. A query goes to a public catalogue based on the search term, the results render as cards, and a route opens the matching title. Title pages pull the synopsis, facts, and credits from more than one source. These requests go through serverless functions so credentials never sit in the browser. The structure stays flat on purpose: home, results, detail.',
  lessons: [
    {
      n: '01',
      title: 'Two ID systems',
      body: 'Search and detail do not share one identifier. I had to resolve one ID into the other before a title page could render.',
      accent: false,
    },
    {
      n: '02',
      title: 'Guard empty payloads',
      body: 'Cards and credits often arrived with a poster and a name, and nothing else. Assuming a full payload was enough to blank a section. The interface now renders only what is actually there.',
      accent: false,
    },
    {
      n: '03',
      title: 'Clean up on leave',
      body: 'A listener attached after a delay kept running after the route had already changed. It stayed invisible until pages lingered on screen for an exit animation. Anything that touches the DOM from an effect needs a teardown.',
      accent: false,
    },
    {
      n: '04',
      title: 'Page transitions are still open',
      body: 'Moving from home to a title page is not smooth; the loading state and the route change compete, and the motion also introduced layout shift across browsers. That part is unfinished and next on my to-do list!',
      accent: true,
    },
  ],
  constraints:
    'Title data comes from TMDB and OMDb. What I would still improve as a React and UI exercise are structure, empty states, accessibility, performance, and those transitions.',
  kicker: 'Thespian is still a sandbox for learning and is not yet a shipped app!',
  images: {
    home: {
      src: '/images/thespian-page-image-home.jpg',
      alt: 'Thespian home: search field on a poster collage',
    },
    search: {
      src: '/images/thespian-page-image-search.jpg',
      alt: 'Search results with title cards and a Learn more action',
    },
    title: {
      src: '/images/thespian-page-image-title.jpg',
      alt: 'Title detail pages for a film and a series, metadata only',
    },
    genre: {
      src: '/images/thespian-page-image-genre.jpg',
      alt: 'Genre browse views for TV comedy and adventure films',
    },
    actor: {
      src: '/images/thespian-page-image-actor.jpg',
      alt: 'Person page with biography and known-for titles',
    },
  },
}