let initaialState = [
  { id: 1, name: "Iphone 6", price: 500, status: true },
  { id: 2, name: "Iphone 6", price: 500, status: true },
  { id: 2, name: "Iphone 6", price: 500, status: true },
];
const product = (state = initaialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default product;
