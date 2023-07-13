function ProductItem(props) {
  let statusName = props.product.status ? "Còn hàng" : "hết hàng";
  let statusClass = props.product.status ? "warning" : "default";
  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>{props.product.id}</td>
        <td>{props.product.name}</td>
        <td>{props.product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-10">
            sửa
          </button>
          <butt on type="button" className="btn  btn-primary">
            Xóa
          </butt>
        </td>
      </tr>
    </>
  );
}

export default ProductItem;
