
//---------TemplateOne - Operators
const user = {
    name: 'Ken Thepvongsa',
    age: '100',
    location: 'Earth!',
};
function getLocation(location) {
    if (location) {
        return <h3>Location: {location}</h3>;
    };
};
// JSX - JavaScript XML
const template = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>  {/*Ternary Operator*/}
    <h3>{(user.age && user.age >= 18) && 'Age: ' + user.age}</h3>  {/*Logical && Operator with checking if exist*/}
    {getLocation(user.location)}  {/*if statment*/}
    </div>
);


//------------TemplateTwo - if statements---------->    
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    };
};

const appRoot = document.getElementById('app');

const numbers = [343, 224, 2555]

const reset = () => {
    app.options = [];
    renderIndecisionApp();
};

const renderIndecisionApp = () => {
    const templateTwo = (
        <div>
            <h1>{(app.title && app.title)}</h1>
            <h3>{(app.subtitle && app.subtitle)}</h3>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={reset}>Remove All</button>
            {
                numbers.map((numbers) => {
                    return <p key={numbers}>Number: {numbers}</p>;

                })
            }
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderIndecisionApp();
