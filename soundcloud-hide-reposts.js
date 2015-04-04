(function() {
    var v = "1.11.1";
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                initHideReposts();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        initHideReposts();
    }

    function initHideReposts() {
        (window.HideReposts = function() {
            $(".soundList__item").has(".soundTitle__info").hide();
        })();
    }
})();
