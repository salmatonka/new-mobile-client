import useTitle from "../../Hooks/useTitle"
import Category from "../Category/Category"
import ChooseOption from "../HomePages/ChooseOption"
import HeadLine from "../HomePages/HeadLine"
import HomeBanner from "../HomePages/HomeBanner"
import HomeProducts from "../HomePages/HomeProducts"
import OfferPhones from "../HomePages/OfferPhones"
import PaymentPartner from "../HomePages/PaymentPartner"
import SourcingPage from "../HomePages/SourcingPage"

const Home = () => {
  useTitle('Home')
  return (
    <div>
      < HomeBanner />
      <Category />
      <HomeProducts />
      <SourcingPage />
      <ChooseOption />
      < OfferPhones />
      <PaymentPartner />
    </div>
  )
}

export default Home

