import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Productos",
    valor: 21,
    icono: "fas fa-tshirt",
}

let amount ={
    color:   "success",
    titulo: "Productos en stock",
    valor: 79,
    icono: "fas fa-sort-numeric-up",
}

let user = {
    color:   "warning",
    titulo: "Usuarios registrados",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;