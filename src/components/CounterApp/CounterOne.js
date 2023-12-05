import React, { useState } from 'react'

const CounterOne = () => {

    const [count, setCount] = useState(100);
    const [greeting, setGreeting] = useState("Hello World");
    const [isLoading, setIsLoading] = useState(false);

    const [contacts, setContacts] = useState([10, 30, 40, 20, 50]);

    const [fullName, setFullName] = useState({firstName: "ABC", lastName: "Xyz"});
    
    // Primitive Data Types
    // Number
    // String
    // Boolean
    // null
    // undefined

    // Derived Data Types
    // Arrays
    // Objects

    return (<div>
       Counter One {count} <br/>
       Greeting is {greeting} <br/> 
       <button className='m-2 p-2 border border-solid bg-blue-700 text-white'
        onClick={()=>setCount(prevCount=>prevCount+ 1)}>Increment</button> 
        <br/>
        {isLoading? <>True</>: <>False</>} <br/>
        {contacts.map(element=>{
           return (<>{element} <br/></> )
            })} <br/>
            Full Name: {fullName.firstName} {fullName.lastName}
    </div>)
}

export default CounterOne;