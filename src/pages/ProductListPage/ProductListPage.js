// ProductListPage.js
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/Productitem/ProductItem";
import { getProducts } from "../../unils/apiCaller";
import { Link } from "react-router-dom";

function showProducts(products) {
  let result = null;
  if (products.length > 0) {
    result = products.map((product, index) => {
      return <ProductItem key={index} product={product} index={index} />;
    });
  }
  return result;
}
function ProductListPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-10">
        <Link to="/product/add" className="btn btn-info">
          Thêm sản phẩm
        </Link>
        <ProductList>{showProducts(products)}</ProductList>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};
export default connect(mapStateToProps, null)(ProductListPage);
