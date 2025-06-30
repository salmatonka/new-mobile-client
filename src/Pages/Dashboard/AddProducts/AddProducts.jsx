import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { toast } from 'react-toastify';

const AddProducts = () => {
    useTitle('AddProduct');
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
   
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    // console.log(date);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const brandName = form.brandName.value;
        const sellerName = form.sellerName.value;
        const date = form.date.value;
        const img = form.img.value
        const model = form.model.value;
        const category = form.category.value;
        const location = form.location.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const yearUsed = form.yearUsed.value;
        const details = form.details.value;


        const newData = {
            name: brandName,
            sellerName,
            img,
            model,
            location,
            resale_price,
            original_price,
            category,
            details,
            userEmail: user?.email,
            date, yearUsed
        }
        console.log(newData)
        fetch(`https://repair-mobile-market.onrender.com/myProducts`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('product added')
                navigate('/dashboard/myProducts')

            })
        // refetch();
        

    }


    return (
        <div className='bg-primary shadow-md py-10 lg:px-14'>
            <div className='flex justify-center mb-12 mt-5'>
                <div className='shadow-xl p-10 border border-2'>
                    <h3 className='text-3xl text-bold text-center'>Please Add Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='md:flex gap-10'>
                            {/* left side  */}
                            <div className='md:w-1/2 '>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">BrandName</span></label>
                                    <input name='brandName' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Picture</span></label>
                                    <input name='img' type='text' className="file-input file-input-bordered file-input-info w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">SellerName</span></label>
                                    <input disabled defaultValue={user?.displayName} name='sellerName' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input name='location' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Date</span></label>
                                    <input name='date' type='date' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Model</span></label>
                                    <input name='model' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Category</span></label>
                                    <select required name='category' className="select select-bordered w-full">
                                        <option value='iphone'>iphone</option>
                                        <option value='Samsung'>Samsung</option>
                                        <option value='Nokia'>Nokia</option>
                                        <option value='Redmi'>Redmi</option>
                                        <option value='Vivo'>Vivo</option>
                                        <option value='Walton'>Walton</option>
                                    </select>
                                </div>
                            </div>
                            {/* Right side  */}
                            <div className='md:w-1/2'>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Resale Price</span></label>
                                    <input name='resale_price' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">OriginalPrice</span></label>
                                    <input name='original_price' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input disabled defaultValue={user?.email} name='email' type='email' className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Years of Use</span></label>
                                    <input name='yearUsed' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Details</span></label>
                                    <textarea name='details' type='text' className="input input-bordered w-full h-32" required />
                                </div>

                            </div>
                        </div>

                        <input className='btn btn-primary text-white w-full mt-5' type="submit" value='Add new product' />

                    </form>


                </div>
            </div>
        </div>
    );
};


export default AddProducts
