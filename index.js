var page = require('webpage').create();
var _ = require('underscore');

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.OnError = function(err) {
    console.log(err);
}

page.open('https://twitter.com/__LM7__/media?lang=en', function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        // page.render('example.png');
        page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", function () {
            console.log("jquery included!");
            var images = page.evaluate(function () {
                var imgs = $('img[src^="https://pbs.twimg.com/media/"]');
                return imgs;
            });

            console.log("images");
            console.log(images);

            console.log('Found ' + images.length + ' images');
            
            var srcs = _.pluck(images, 'src');

            phantom.exit(0);
        });
    }
});