
const app = {
    title: 'Indecision',
    subtitle: 'Some random text',
    options: ['One', 'Two']
}

const template = (
<div>
    <h1>{app.title}</h1> 
    { app.subtitle && <p>{app.subtitle}</p>} 
    <p>{(app.options && app.options.length) > 0 ? 'Here are your options': 'No Options'}</p>
    <ol>
        <li>Item {app.options[0]}</li>
        <li>Item {app.options[1]}</li>
    </ol>
</div>
);

const user = {
    name : 'Test',
    age : 24,
    location : 'Florida'
}

const getLocation = (location) => {
    return location? <p>Location: {location}</p> : undefined;
}

const templateTwo = (
<div>
    <h1>{user.name}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {user.location? <p>Location: {user.location}</p> : undefined}
</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);