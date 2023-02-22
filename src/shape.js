import React from "react";
class Circle extends React.Component{
render() {
    var radius=4;
    return(<>Area of Shape using class <br></br>Area Of the Circle={3.14*radius*radius} radius=4<br></br></>)
}
}
class Rectangle extends React.Component{

    render(){
        var length=2;
        var breath=2;
        return(<>Area of the Rectangle={length*breath} breath=2 length=2<br></br></>)
    }
}
class Triangle extends React.Component{
    render(){
        var breath=2;
        var hieght=2;
        return(<>Area of the Triangle={(1/2)*breath*hieght} hieght=2 breath=2<br></br></>)
    }
}
class Cuboid extends React.Component{
    render(){
        var l=2,b=3,h=2;
        
        return (<>Area of the Cuboid={2*(l*b +b*h +h*l)} length=2 breath=3 hieght=2<br></br></>)
    }
} 
class Square extends React.Component{
    render(){
        var s=3;
        return (<>Area of the Square={s*s} side=3</>)
    }
}
export {Circle,Rectangle,Triangle,Cuboid,Square}