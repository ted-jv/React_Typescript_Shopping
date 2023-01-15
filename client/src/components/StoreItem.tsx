type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} className="card-img" />
      <body>
        <span>{name}</span>
        <span>{price}</span>
      </body>
    </div>
  );
};

export default StoreItem;
