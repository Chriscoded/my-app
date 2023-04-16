import React from "react"
const person = {
    name : "christopher",
    level : "HND 2"
}


const { name, level} = person;



export default function Contact({name, level}){
    return (
        <main>
            <div className="main-content">
                <h1 className="main-title">Fun facts about React</h1>
                <ul className="main-facts">
                    <li>{name}</li>
                    <li>{level}</li>
                    {/* <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li> */}
                </ul>
            </div>
            
        </main>
    )
   
}


