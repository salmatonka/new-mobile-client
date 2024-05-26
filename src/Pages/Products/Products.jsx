import { useQuery } from "@tanstack/react-query";
import useTitle from "../../Hooks/useTitle";
import ProductsCard from "./ProductsCard";

const Products = () => {
    useTitle('Product');
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/product')
            const data = await res.json()
            return data;
        }
    })
    // console.log(products)

    return (
        <div className="bg-gradient-to-tr to-purple-100 from-cyan-100 ">
           <h1 className="text-3xl pt-12 font-bold text-center  ">All Mobiles</h1>
            <div className='py-10 px-6'>
                {/* {
          allProducts.length
        } */}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        products?.reverse()
                        ?.slice(0, 6)
                        ?.map(product => <ProductsCard
                            key={product?._id}
                            product={product}
                        ></ProductsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products
