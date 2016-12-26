/**
 * Created by muhammed on 25/12/16.
 */
exports.home = function (req, res) {
    res.render('home', {
        city: null,
        title: 'iLoveMyCity',
        headline: 'We believe that every city have something to say'
    });
};

exports.city = function (req, res) {
    var imageCount = 4,
        city = req.params.city,
        title = 'iLoveMyCity',
        headline = 'We believe that every city have something to say';

    switch (city) {
        case 'berlin':
            title = 'Berlin';
            headline = 'Berlin: Where love is in the air';
            break;
        case 'paris':
            title = 'Paris';
            headline = 'Paris: Good talkers are only found in Paris';
            break;
        case 'madrid':
            title = 'Madrid';
            headline = 'Madrid: Buzz, Beautiful architecture and Football';
            break;
        case 'london':
            title = 'London';
            headline = 'London: Sparkling, Still, Food, Gorgeous';
            break;
        case 'newyork':
            imageCount = 6;
            title = 'New York';
            headline = 'New York: Come to New York to become someone new';
            break;
    }

    res.render('city', {
        city: city,
        title: title,
        headline: headline,
        imageCount: imageCount
    });
};
