function Circle1(){
    var radius=3;
    return (<><br></br>Finding Area using function<br></br>The area of the Circle{3.14*radius*radius}<br></br></>)
}
function Rectangle1(){
    var length=2;
    var breath=2;
    return (<>The area of the Rectangle{length*breath}<br></br></>)
}
function Triangle1(){
    var breath=2;
    var hieght=3;
    return (<>The area of the Triangle {(1/2)*breath*hieght}<br></br></>)
}
function Cuboid1(){
    var l=2,b=3,h=2;
    
    return (<>Area of the Cuboid={2*(l*b +b*h +h*l)} length=2 breath=3 hieght=2<br></br></>)
}
function Square1(){
    
    var s=3;
    return (<>Area of the Square={s*s} side=3</>)
}
export {Circle1,Rectangle1,Triangle1,Cuboid1,Square1}