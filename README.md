# Infinite scroll Vue 3

Example demonstrate infinite scroll by Levinez Michael

To install

1. Clone from repo
2. `cd infinite-scroll-vue`
3. To install deps `npm i`
4. Once `npm run build`
5. For launch `npm run dev`

# Project map

`src` `>`\
&emsp;`assets` `>` - just leaving it as is\
&emsp;&emsp;`...` - original contents from vite build\
\
&emsp;`components` `>`\
&emsp;&emsp;`InfiniteLoader` `>` - main component\
&emsp;&emsp;&emsp;`InfiniteLoader.js` - separated logic of component i.e. controller\
&emsp;&emsp;&emsp;`InfiniteLoader.sass` - styles for component\
&emsp;&emsp;&emsp;`InfiniteLoader.vue` - template with most html and minor code injection\
\
&emsp;&emsp;`Item` `>` - represents feed item (contents of `InfiniteLoader`)\
&emsp;&emsp;&emsp;`...` - same files for each component (js, sass, vue)\
\
&emsp;&emsp;`Pagination` `>` - help to navigate through pages: (&laquo; 1 2 … 8 9 &raquo;)\
&emsp;&emsp;&emsp;`...` - same files for each component (js, sass, vue)\
\
&emsp;`css` `>`\
&emsp;&emsp;`style.sass` - general styles for whole project\
\
&emsp;`js` `>`\
&emsp;&emsp;`api.js` - class that do API work\
&emsp;&emsp;`main.js` - using for initialization of vue\
&emsp;&emsp;`nametohsl.js` - my script from npm to colorize users while we awaiting for avatar\
\
&emsp;`models` `>`\
&emsp;&emsp;`Item.js` - model that using `InfiniteLoader` to structurize received items\
\
&emsp;`App.vue` - main template of app

# Yo listen up, it's a story..
I decided to do all that possible using classes (Factory/Builder) because in my mind it's only way
to do project within beautiful and correct structure, interchangeability of classes following patterns.

I don't like singleton/multiton/object pool patterns. I feeling that it slower than factory,
and have too unelegan look instead of one i used.

P.S. Yeah, i'm maniac of JSDOC =)
If you feel i did something wrong, please tell me - I like learning new approaches and improving myself.