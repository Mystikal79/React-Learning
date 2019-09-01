'use strict';

//---------TemplateOne - Operators
var user = {
    name: 'Ken Thepvongsa',
    age: '100',
    location: 'Earth!'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'h3',
            null,
            'Location: ',
            location
        );
    };
};
// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    '  ',
    React.createElement(
        'h3',
        null,
        user.age && user.age >= 18 && 'Age: ' + user.age
    ),
    '  ',
    getLocation(user.location),
    '  '
);

//------------TemplateTwo - if statements---------->    
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

// function getOptions(options) {
//     if(options.length > 1) {
//         return(<p>Here are your options</p>)
//     }else {
//         return ("No options!")
//     };
// };

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title && app.title
    ),
    React.createElement(
        'h3',
        null,
        app.subtitle && app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    ),
    React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
