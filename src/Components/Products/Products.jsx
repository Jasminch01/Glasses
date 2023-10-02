import { useLoaderData } from "react-router-dom";
import Product from "../Projuct/Product";

const Products = () => {
  const datas = useLoaderData();
  return (
    <div className="px-[10%]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {datas.map((data) => (
          <Product key={data.id} data={data}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
