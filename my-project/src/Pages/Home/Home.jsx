// Internal Imports
import Header from "../../HomeComponent/Header/Header"
import Banner from "../../HomeComponent/Banner/Banner"
import Skill from "../../HomeComponent//Skill/Skill"
import About from "../../HomeComponent/About/About"
import Blog from "../../HomeComponent/Blog/Blog"
import Footer from "../../HomeComponent/Footer/Footer"
import ThemContex from "../../Utils/ThemContex"
import Workprocess from "../../HomeComponent/Workprocess/Workprocess"

const Home = () => {

  return (
    <>
      <ThemContex>
        <Header />
        <Banner />
        <Skill />
        <Workprocess />
        <About />
        <Blog />
        <Footer />
      </ThemContex>
    </>
  );
}

export default Home
