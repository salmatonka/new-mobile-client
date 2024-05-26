import Category from "../Category/Category"
import ChooseOption from "../HomePages/ChooseOption"
import HeadLine from "../HomePages/HeadLine"
import HomeBanner from "../HomePages/HomeBanner"
import OfferPhones from "../HomePages/OfferPhones"
import Reviews from "../HomePages/Reviews"
import SourcingPage from "../HomePages/SourcingPage"
import Products from "../Products/Products"

const Home = () => {
  return (
    <div>
      < HeadLine />
      < HomeBanner />
      <Category />
      <Products />
     < ChooseOption />
      < SourcingPage />
    < Reviews />
     < OfferPhones />
    </div>
  )
}

export default Home

