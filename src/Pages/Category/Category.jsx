import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useEffect, useState } from "react";

const Category = () => {

    useTitle('Categories');

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://repair-mobile-market.onrender.com/mobileCategory`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="">
            <div className='max-w-screen-xl  w-full  mx-auto'>
                <div className="pt-14 text-center ">
                    <h1 className="text-2xl font-bold">Mobile Phone Category</h1>
                    <p className="py-2">Get Your Desired Product from Mobile Phone Category!</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 py-8'>
                    {
                        categories?.map(category => <Link
                            key={category?.id}
                            category={category}
                            to={`/usedMobile/${category?.category}`}>
                            <button className='category-button bg-secondary hover:bg-info text-gray-100 shadow-2xl w-full py-3 rounded-lg'>{category?.name}</button></Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Category
