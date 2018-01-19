'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'Some random text',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        (app.options && app.options.length) > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item ',
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            'Item ',
            app.options[1]
        )
    )
);

var user = {
    name: 'Test',
    age: 24,
    location: 'Florida'
};

var getLocation = function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    user.location ? React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    ) : undefined
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
