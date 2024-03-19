import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 rounded-md p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-6xl font-bold'>{price}</span>
            </h2>
            <h4 className='text-3xl text-center my-3'>{name}</h4>
            <div className='grid md:grid-cols-1 pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full px-4 py-2 rounded-md hover:bg-green-900 duration-150 font-bold'>Buy Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object
}

export default PriceOption;