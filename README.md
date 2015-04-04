# soundcloud-hide-reposts
A bookmarklet which hides those pesky reposts on SoundCloud.

-

bookmarklet (_drag code to bookmarks_): <pre title="Hide Reposts"><code title="Hide Reposts">javascript:(function(){function e(){(window.HideReposts=function(){$(".soundList__item").has(".soundTitle__info").hide()})()}var t="1.11.1";if(void 0===window.jQuery||window.jQuery.fn.jquery\<t){var a=!1,n=document.createElement("script");n.src="//ajax.googleapis.com/ajax/libs/jquery/"+t+"/jquery.min.js",n.onload=n.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,e())},document.getElementsByTagName("head")[0].appendChild(n)}else e()})();</code></pre>

-
#### known issues
- Hidden songs still play when autoplaying
