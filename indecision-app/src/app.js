
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
    options: ['One', 'Two']
};

// function getOptions(options) {
//     if(options.length > 1) {
//         return(<p>Here are your options</p>)
//     }else {
//         return ("No options!")
//     };
// };

const templateTwo = (
    <div>
        <h1>{(app.title && app.title)}</h1>
        <h3>{(app.subtitle && app.subtitle)}</h3>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
)
const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);