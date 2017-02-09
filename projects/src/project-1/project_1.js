import React from "react"

class Menu extends React.Component{
    render(){
        let menus = ["Home","about","contact us"];

        return (
            React.createElement("div",null,
                menus.map((val,idx)=>{
                    return React.createElement('div',
                    {key:idx},
                    React.createElement(Link,{value:val})
                    )//
                })           
            )// div end
        )
    }
}

class Link extends React.Component{
    render(){
        const URL = "/"+this.props.value.toLowerCase().trim().replace(" ","-");

        return (
            React.createElement("div",null,
            React.createElement("a",
             {href:URL},
             this.props.value,
            ),// a end
            React.createElement("br")
        ) // div end
      )
    }
}
export default Menu