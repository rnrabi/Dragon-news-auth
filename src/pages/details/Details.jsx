import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/shared/Header";
import LoginGoogle from "../../components/shared/LoginGoogle/LoginGoogle";
import Navber from "../../components/shared/Navber";
import QZone from "../../components/shared/QZone/QZone";
import FindUs from "../../components/shared/findUs/FindUs";


const Details = () => {
    const { id } = useParams()
    const singleNews = useLoaderData();
    //  console.log(singleNews);
    const aNews = singleNews.find(single => single._id === id)
    console.log(aNews);
    const {image_url , title , details} =aNews;

    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <Navber></Navber>
            <div className="grid gap-10 grid-cols-4">
                <div className="col-span-3">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <LoginGoogle></LoginGoogle>
                    <FindUs></FindUs>
                    <QZone></QZone>
                </div>
            </div>
        </div>
    );
};

export default Details;