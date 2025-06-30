import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err)
  return (

    <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
          <img className='rounded-xl' src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png" alt="" />
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">{err?.data}</p>
        <p className="mt-4 mb-8 text-gray-600">But dont worry, you can go to homepage.</p>
        <Link to='/' className="lg:px-8 py-3 font-semibold rounded bg-blue-500 text-gray-50">Back to homepage</Link>
      </div>
    </div>
  </section>
  
  )
}

export default ErrorPage
