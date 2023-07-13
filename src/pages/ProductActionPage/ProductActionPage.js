import React, { useState } from "react";
import { postProducts } from "../../unils/apiCaller";

function ProductActionPage() {
  const [products, setProducts] = useState([
    {
      id: "",
      txtName: "",
      txtPrice: 0,
      chkbStatus: "",
    },
  ]);
  function onchange(e) {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setProducts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function onSave(e) {
    e.preventDefault();
    console.log(products);
    postProducts(products)
      .then((res) => {
        console.log("====================================");
        console.log(res.data);
        console.log("====================================");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let { txtName, txtPrice, chkbStatus } = products;

  return (
    <>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={onSave}>
            <legend>Form title</legend>
            <div className="form-group">
              <label>Tên sản phẩm :</label>
              <input
                type="text"
                className="form-control"
                name="txtName"
                value={txtName}
                onChange={onchange}
              />
            </div>{" "}
            <div className="form-group">
              <label>Gía :</label>
              <input
                type="number"
                className="form-control"
                name="txtPrice"
                value={txtPrice}
                onChange={onchange}
              />
            </div>{" "}
            <div className="form-group">
              <label>Trạng thái:</label>
            </div>{" "}
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  className="form-control"
                  name="chkbStatus"
                  value={chkbStatus}
                  onChange={onchange}
                />
                Còn hàng
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Lưu lại
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductActionPage;
