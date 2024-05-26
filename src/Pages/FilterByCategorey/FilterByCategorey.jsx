import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import ProductsCard from "../Products/ProductsCard";

const FilterByCategorey = () => {

    useTitle('FilterByCategorey');

    const products = useLoaderData();
    console.log(products)

    return (
        <div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        products.map(product => <ProductsCard
                            key={product?._id}
                            product={product}
                        ></ProductsCard>)
                    }
                </div>
        </div>
    );
};

export default FilterByCategorey
