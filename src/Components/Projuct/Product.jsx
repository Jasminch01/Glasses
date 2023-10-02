import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Product = ({data}) => {
    const {id, name , price , description, discount, image } = data;
    return (
        <div className='bg-slate-300 rounded-lg p-5'>
            <img src= {image} alt="" />
            <p className="text-xl">{name}</p>
            <p>Price : {price}</p>
            <p>Discount : {discount}</p>
            <p>{description}</p>
            <div className='text-center my-3'>
                <button className='p-3 bg-green-400 rounded-lg text-white'> <Link to= {`/product-details/${id}`} >Show Details</Link> </button>
            </div>
        </div>
    );
};

Product.propTypes = {
    data : PropTypes.object.isRequired
}
export default Product;