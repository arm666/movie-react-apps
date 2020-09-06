(this["webpackJsonpmovie-react-app"]=this["webpackJsonpmovie-react-app"]||[]).push([[0],{27:function(e,a,t){e.exports=t(59)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),i=t.n(r),l=(t(32),t(33),t(8)),o=t(1),m=t(7);var s=function(e){var a=e.setMenu,t=[{title:"Now Playing",url:"/movie/now_playing"},{title:"Trending",url:"/trending/movie/day"},{title:"Popular",url:"/movie/popular"},{title:"Top Rated",url:"/movie/top_rated"},{title:"Upcoming",url:"/movie/upcoming"},{title:"Discover",url:"/discover/movie"}],r=function(e){var n=document.querySelectorAll(".menu");n.forEach((function(e){return e.classList.remove("menuActive")})),n[e].classList.add("menuActive"),a(t[e].url)};return Object(n.useEffect)((function(){r(0)}),[]),c.a.createElement("div",{className:"menus"},c.a.createElement("div",{className:"appTitle"},"MovieApp"),t.map((function(e,a){return c.a.createElement("div",{onClick:function(){return r(a)},className:"menu",key:"menu"+a},c.a.createElement("div",{className:"title"},e.title))})))},u=(t(34),[28,12,16,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37]),v=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];var d=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var a="";e.map((function(e){u.includes(e)&&(a+=", "+v[u.indexOf(e)])})),r(a)}),[c]),c.substr(1)};var p=function(e){var a=e.details;return c.a.createElement("div",{className:"movieCard"},c.a.createElement("div",{className:"vote_average"},a.vote_average),c.a.createElement("div",{className:"posterImg"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:"poster"})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"title"},a.original_title),c.a.createElement("div",{className:"genres"},d(a.genre_ids))))},E=t(11),f=t.n(E);var g=function(e,a){var t=Object(n.useState)([]),c=Object(m.a)(t,2),r=c[0],i=c[1];Object(n.useEffect)((function(){l()}),[a]);var l=function(){var t="http://api.themoviedb.org/3"+e+"?api_key=85b891d38491973c0dff31bd631036b3&"+a;f.a.get(t).then((function(e){i(e.data.results)})).catch((function(e){console.log(e)}))};return{movieList:r}};var h=function(e){var a=e.url,t=e.query,n=g(a,t).movieList;return c.a.createElement("div",{className:"moviesList"},"undefined"!==n&&n.length>0?n.map((function(e,a){return c.a.createElement(l.c,{to:"/movie-react-apps/movie/"+e.id,key:"movieCard"+a,style:{textDecoration:"none"}},c.a.createElement(p,{details:e}))})):c.a.createElement("div",{style:{color:"white"}},'"No Simiar Movies Found." '))};t(57);var N=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",{className:"navbars"},c.a.createElement("ul",null,c.a.createElement("li",{className:"items appName"},c.a.createElement(l.b,{to:"/movie-react-apps",className:"title"},"Movie App")),c.a.createElement("li",{className:"items searchBox"},c.a.createElement("input",{onKeyDown:function(e){13===e.keyCode&&t.length>0&&document.querySelector(".btnSearch").click()},className:"movieInput",placeholder:"Search ..",value:t,onChange:function(e){return r(e.target.value)}}),t.length>0?c.a.createElement(l.b,{to:"/movie-react-apps/search/"+t},c.a.createElement("button",{className:"btnSearch"}," Search")):c.a.createElement("button",{className:"btnSearch"}," Search"))))};var b=function(){var e=Object(n.useState)("/movie/now_playing"),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){}),[t]),c.a.createElement("div",{className:"HomePage"},c.a.createElement("div",{className:"pages sideBar"},c.a.createElement(s,{setMenu:r})),c.a.createElement("div",{className:"pages homeMovieBar"},c.a.createElement(N,null),c.a.createElement(h,{url:t,query:" "})))};t(58);var y=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],r=t[1];Object(n.useEffect)((function(){i()}),[e]);var i=function(){var a="https://api.themoviedb.org/3/movie/"+e+"?api_key=85b891d38491973c0dff31bd631036b3";f.a.get(a).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))};return{eachMovie:c}};var w=function(e){var a=e.movieId,t=y(a).eachMovie;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[t]),c.a.createElement("div",{className:"selectdMovie"},""!==t&&c.a.createElement("div",null,c.a.createElement("div",{className:"eachMBackImg"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+t.backdrop_path})),c.a.createElement("div",{className:"posterAndInfo"},c.a.createElement("div",{className:"poster"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path}))),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"Title"},t.original_title),c.a.createElement("div",{className:"YearAndGenre"},c.a.createElement("div",{className:"Year"},t.release_date),c.a.createElement("div",{className:"Genre"},t.genres.map((function(e,a){return e.name+(a!==t.genres.length-1?" / ":"")})))),c.a.createElement("div",{className:"Rating"},t.vote_average),c.a.createElement("div",{className:"TimeAndLang"},c.a.createElement("div",{className:"Time"},t.runtime," "),c.a.createElement("div",{className:"Lang"},t.spoken_languages.map((function(e,a){return e.name+(a!==t.spoken_languages.length-1?" , ":"")})))),c.a.createElement("div",{className:"ProductionCompany"},c.a.createElement("div",{className:"title"},"Production Companies"),t.production_companies.map((function(e,a){return e.name+(a!==t.production_companies.length-1?" / ":"")}))),c.a.createElement("div",{className:"ProductionCountry"},c.a.createElement("div",{className:"title"},"Production Countries"),t.production_countries.map((function(e,a){return e.name+(a!==t.production_countries.length-1?" / ":"")}))))),c.a.createElement("div",{className:"overview"},c.a.createElement("div",{className:"title"},"Overview"),c.a.createElement("div",{className:"content"},t.overview))))};var _=function(e){return c.a.createElement("div",{className:"eachMovie"},c.a.createElement(N,null),c.a.createElement(w,{movieId:e.match.params.id}),c.a.createElement("div",{className:"similarMovies"},c.a.createElement("div",{className:"similarMovieTitle"},"Similar Movies"),c.a.createElement(h,{url:"/movie/"+e.match.params.id+"/similar"})))};var M=function(e){return c.a.createElement("div",{style:{background:"#222"}},c.a.createElement(N,null),c.a.createElement("div",null,c.a.createElement("div",null)),c.a.createElement(h,{url:"/search/movie",query:"query="+e.match.params.query}))};var O=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:b}),c.a.createElement(o.a,{exact:!0,path:"/movie-react-apps",component:b}),c.a.createElement(o.a,{exact:!0,path:"/movie-react-apps/",component:b}),c.a.createElement(o.a,{path:"/movie-react-apps/movie/:id",component:_}),c.a.createElement(o.a,{path:"/movie-react-apps/search/:query",component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.c9ed45a9.chunk.js.map