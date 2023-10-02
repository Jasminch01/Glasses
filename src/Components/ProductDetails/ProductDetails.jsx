import { useLoaderData, useNavigate, } from "react-router-dom";

const ProductDetails = () => {
  const { name, image, description, price } = useLoaderData();
  const navigate = useNavigate();
  const gobackHandler = () => {
    navigate(-1)
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-300 p-5 rounded-lg">
        <img src={image} alt="" />
        <p className="text-2xl font-medium">{name}</p>
        <p className="text-xl font-medium">Price : {price}</p>
        <p className="text-xl">{description}</p>
        <div className="text-center my-3">
            <button onClick={gobackHandler} className="p-3 bg-lime-500 rounded text-white font-bold">Go back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
