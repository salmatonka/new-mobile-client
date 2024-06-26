import { useQuery } from "@tanstack/react-query";
import useTitle from "../../Hooks/useTitle";
import ProductsCard from "./ProductsCard";
import { Link } from "react-router-dom";

const Products = () => {
    useTitle('Product');
    const { data: mobiles = [] } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            const res = await fetch('https://repair-mobile-market.onrender.com/usedMobile')
            const data = await res.json()
            return data;
        }
    })
    // console.log(mobiles)

    return (
        <div className="max-w-[1240px] mx-auto ">
           <h1 className="text-3xl pt-12 font-bold text-center  ">All Mobiles</h1>
            <div className='py-10 px-6'>
                {/* {
          allProducts.length
        } */}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        mobiles?.reverse()
                        ?.slice(0, 6)
                        ?.map(mobile => <ProductsCard
                            key={mobile?._id}
                            mobile={mobile}
                        ></ProductsCard>)
                    }
                </div>
                <div className='flex justify-center mt-10'>
                <Link to='/allProducts'>
                    <button style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px" }}
                     className='px-20 fond-semibold bg-gradient-to-tr to-purple-400 from-cyan-300 w-full  py-3 rounded-lg' >See all</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Products
