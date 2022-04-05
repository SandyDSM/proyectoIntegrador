import React, { Component } from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      productsList: []
    }
  }
  componentDidMount() {
    console.log("cargando");
    fetch("/api/products")
      .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
      })
      .then(products => {
        console.log(products);
        this.setState({ 
          productsList: products.data
         });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                className="m-0 font-weight-bold text-gray-800"
              >
                Tipos productos
              </h6>
            </div>
            <div className="card-body" id="card-box-2">
              <div className="row">
                {this.state.productsList.map((products, index) => {
                  return <Genre {...products} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GenresInDb;
