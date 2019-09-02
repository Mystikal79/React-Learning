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
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    };
};

var appRoot = document.getElementById('app');

var numbers = [343, 224, 2555];

var reset = function reset() {
    app.options = [];
    renderIndecisionApp();
};

var renderIndecisionApp = function renderIndecisionApp() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Remove All'
        ),
        numbers.map(function (numbers) {
            return React.createElement(
                'p',
                { key: numbers },
                'Number: ',
                numbers
            );
        }),
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
            ),
            React.createElement(
                'li',
                null,
                'Item Three'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderIndecisionApp();
