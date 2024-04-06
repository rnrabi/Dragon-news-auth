import { useLoaderData } from "react-router-dom";
import Category from "../../components/category/Category";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/shared/Header";
import LoginGoogle from "../../components/shared/LoginGoogle/LoginGoogle";
import Navber from "../../components/shared/Navber";
import QZone from "../../components/shared/QZone/QZone";
import FindUs from "../../components/shared/findUs/FindUs";


const Home = () => {
 const news = useLoaderData()
 console.log(news)




    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <Navber></Navber>
            <div className="grid gap-5 grid-cols-4">

                <div>
                    <Category></Category>
                </div>

                <div className="col-span-2">
                    {
                        news.map(aNews=><NewsCard
                        key={aNews._id}
                        aNews={aNews}
                        ></NewsCard>)
                    }
                </div>

                <div className="">
                   <LoginGoogle></LoginGoogle>
                   <FindUs></FindUs>
                   <QZone></QZone>
                </div>
            </div>
        </div>
    );
};

export default Home;