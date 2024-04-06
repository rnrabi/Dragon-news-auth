import { useEffect, useState } from "react";
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';

const Category = () => {
    const [categories ,setCategories] = useState([])
    useEffect(()=>{
        fetch('./data/categories.json')
        .then((res=>res.json()))
        .then(cate =>setCategories(cate))
    },[])
    // console.log(categories)
    return (
        <div>
            <h2 className="text-2xl font-bold">All Categories</h2>
            <div className="text-xl">
                {
                    categories.map(category => <h2 
                    key={category.id}
                    className="py-4 ml-2"
                    >{category.name}</h2>)
                }
            </div>
            <div>
                <img className="mb-4" src={one} alt="" />
                <img className="mb-4" src={two} alt="" />
                <img src={three} alt="" />
            </div>
        </div>
    );
};

export default Category;