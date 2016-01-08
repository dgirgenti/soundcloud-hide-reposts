# soundcloud-hide-reposts
A bookmarklet which hides those pesky reposts on SoundCloud.

-

bookmarklet (_drag code to bookmarks_): <pre title="Hide Reposts"><code title="Hide Reposts">javascript:(function(){for(var e=document.querySelectorAll(".soundList__item"),n=0;n\<e.length;n++){var r=e[n];r.innerHTML.indexOf("reposted")\>-1&&r.remove()}})();</code></pre>

-
#### known issues
- You have to keep clicking the bookmarklet as you scroll
- Hidden songs still play when autoplaying
