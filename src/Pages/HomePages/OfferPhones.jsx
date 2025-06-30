
const OfferPhones = () => {
  return (
    <div>
    <div className='py-20'>

        <section className="bg-primary shadow-md">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://i.ibb.co/JkbBPfS/big-sales.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">Spacial discount in used phones</h3>
                        <p className="my-6 dark:text-gray-400">You can sale or buy products with extra comission from now. Lets take some discount.</p>
                        <button type="button" className="self-start px-10 py-3 text-lg font-medium rounded-3xl
                         bg-info text-gray-100 hover:bg-secondary">Get Discount</button>
                    </div>
                </div>

            </div>
        </section>
    </div>
</div>
  )
}

export default OfferPhones
