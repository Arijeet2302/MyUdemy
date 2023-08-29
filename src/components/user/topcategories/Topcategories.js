import React from 'react';
import  "./topcategories.css";
import CategoryCard from "./CategoryCard";


export default function Topcategories(){
    return (
        <div className="topCategories">
            <h2 className='categoryHeading'>Top Categories</h2>
            <div className='categories'>
                <CategoryCard
                    imgsrc={"https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"}
                    title={"Design"}
                    name = {"design"}
                />
                <CategoryCard
                    imgsrc={
                        "http://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
                    }
                    title={"Developement"}
                    name={"developement"}
                />
                <CategoryCard
                    imgsrc={
                        "http://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
                    }
                    title={"Marketing"}
                    name={"marketing"}
                />
                <CategoryCard
                    imgsrc={
                        "http://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
                    }
                    title={"IT and Software"}
                    name={"it-and-software"}
                />
                <CategoryCard
                    imgsrc={
                        "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
                    }
                    title={"Personal Developement"}
                    name={"personal-developement"}
                />
                <CategoryCard
                    imgsrc={
                        "http://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
                    }
                    title={"Business"}
                    name={"business"}
                />
                <CategoryCard
                    imgsrc={
                        "http://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
                    }
                    title={"Photography"}
                    name={"photography"}
                />
                <CategoryCard
                    imgsrc={
                        "http://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
                    }
                    title={"Music"}
                    name={"music"}
                />
            </div>
        </div>
    )
}