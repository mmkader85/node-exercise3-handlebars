/**
 * Created by muhammed on 26/12/16.
 */
exports.home = function (req, res) {
    res.render('home', {
        city: null,
        title: 'iLoveMyCity',
        headline: 'We believe that every city have something to say'
    });
};

exports.city = function (req, res) {
    var imagesIndices = [1, 2, 3, 4],
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
            imagesIndices.push(5, 6);
            title = 'New York';
            headline = 'New York: Come to New York to become someone new';
            break;
    }

    res.render('city', {
        city: city,
        title: title,
        headline: headline,
        imagesIndices: imagesIndices
    });
};
