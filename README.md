# Infinite scroll Vue 3

Example demonstrate infinite scroll by Levinez Michael

To install

1. Clone from repo
2. `cd infinite-scroll-vue`
3. To install deps `npm i`
4. Once `npm run build`
5. For launch `npm run dev`

# Project map

`src` >\
&ensp;`assets` > - just leaving it as is\
&emsp;... - original contents from vite build\
&ensp;`components` >\
&emsp;`InfiniteLoader` > - main component\
&emsp;&ensp;`InfiniteLoader.js` - separated logic of component i.e. controller\
&emsp;&ensp;`InfiniteLoader.sass` - styles for component\
&emsp;&ensp;`InfiniteLoader.vue` - template with most html and minor code injection\
&emsp;`Item` > - represents feed (contents of `InfiniteLoader`)\
&emsp;&ensp;... - same files for each component (js, sass, vue)\
&emsp;`Pagination` > - help to navigate through pages\
&emsp;&ensp;... - same files for each component (js, sass, vue)\
&ensp;`css` >\
&emsp;`style.sass` - general styles for whole project\
&ensp;`js` >\
&emsp;`api.js` - class that do API work\
&emsp;`main.js` - using for initialization of vue\
&emsp;`nametohsl.js` - my script to colorize users while we awaiting for avatar\
&ensp;`models` >\
&emsp;`Item.js` - model that using `InfiniteLoader` to structurize received items