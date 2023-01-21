type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 0;
  return (
    <div className="card">
      <img src={imgUrl} alt={name} className="card-img" />
      <body>
        <title>{name}</title>
        <span>{price}</span>
        <div className="add-btn">
          {quantity === 0 ? (
            <button>+ Add To Cart</button>
          ) : (
            <div>
              <button>-</button>
              <div>
                <span>{quantity}</span>in cart
              </div>
              <button>+</button>
            </div>
          )}
        </div>
      </body>
    </div>
  );
};

export default StoreItem;
