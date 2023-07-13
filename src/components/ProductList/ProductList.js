function ProductList(props) {
  return (
    <>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách sản phẩm</h3>
        </div>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã </th>
                <th>Tên </th>
                <th>Gía</th>
                <th>Trạng thái</th>
                <th>Hàng động</th>
              </tr>
            </thead>
            <tbody>{props.children}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductList;
