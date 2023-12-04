import React, { useState } from 'react'

const CounterOne = () => {
    const [count, setCount] = useState(110);
    const [greeting, setGreeting] = useState("Hello World");
    const [isloading, setLoading] = useState(true);
    const [name, setName] = useState({ firstName: "ABC", lastName: "Xyz" });
    const [contacts, setContacts] = useState([10, 30, 40, 50, 60]);

    // Number
    // String
    // Boolean
    // null
    // undefined

    // Derived Data Types
    // Arrays
    // Objects

    return (<div>
        Hello World COunter One count: {count} <br />
        Greeting of the Day: {greeting} <br />
        Is the Page still Loading: {isloading?<>True</>:<>False</> } <br />
        The Name is : {name.firstName} {name.lastName} <br />

        The Contact list is :  <br /> {contacts.map(element =>(<>{element} </>))}



    </div>)
}

export default CounterOne;