# Infinite scroll Vue 3

Example demonstrate infinite scroll by Levinez Michael

To install

1. Clone from repo
2. `cd infinite-scroll-vue`
3. To install deps `npm i`
4. Once `npm run build`
5. For launch `npm run dev`

#Project map

`src` >
  `assets` > - just leaving it as is
    ... - original contents from vite build
  `components` >
    `InfiniteLoader` > - main component
      `InfiniteLoader.js` - separated logic of component i.e. controller
      `InfiniteLoader.sass` - styles for component
      `InfiniteLoader.vue` - template with most html and minor code injection
    `Item` > - represents feed (contents of `InfiniteLoader`)
      ... - same files for each component (js, sass, vue)
    `Pagination` > - help to navigate through pages
      ... - same files for each component (js, sass, vue)
  `css` >
    `style.sass` - general styles for whole project
  `js` >
    `api.js` - class that do API work
    `main.js` - using for initialization of vue
    `nametohsl.js` - my script to colorize users while we awaiting for avatar
  `models` >
    `Item.js` - model that using infinite loader to structurize received items