import React from "react";
import ReactDOM from "react-dom/client";

//React Element//
const heading = <span style={{color:"red"}}>hello</span>
const image = <img src="https://res.cloudinary.com/dsqsfves6/image/upload/v1700634388/dkbq0lyxeuxuri1rtzzy.png"></img>

const title = 
( <div id="container">
    
    <h1 className="head"> {heading} Namasthe React 🚀</h1>
</div>
)

// React Fuctional Component
const HeadingComponent = () => (
    <div id="container">
        {title}
        {image}
       <h1 className="heading">Hello Namasthe React Functional Component</h1>
    </div>
    );



// const Heading = () => {
//     return <h1>Hello Namasthe</h1>
// }



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>)

// root.render(heading)

