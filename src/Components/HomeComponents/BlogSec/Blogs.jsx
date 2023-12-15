import { useState } from "react";
import { BlogCard } from "./BlogCard";

let BlogArr = [
  {
    title:'Moonlit Moments',
    description:'Discover the magic that unfolds under the night sky at Lotus Haven. From rooftop stargazing to moonlit garden walks, immerse yourself in the enchanting experiences our nights have to offer.',
    date:'Jun 04, 2023',
    profile:{
        name:"Jhon",
        like:40,
        comments:1
    }
  },{
    title:'Beachfront Bliss',
    description:'Explore the coastal charm of Lotus Haven with private beach access, water sports, and the soothing sounds of the waves. Your perfect beachfront escape begins here.',
    date:'Mar 31, 2023',
    profile:{
        name:'Vivek',
        like:35,
        comments:4
    }
  },{
    title:'Luxury Unveiled',
    description:'Step into a world of comfort and elegance. Our blog offers a glimpse into the luxurious hotel rooms at Lotus Haven, where every detail is designed for your relaxation and pleasure.',
    date:'Feb 03, 2023',
    profile:{
        name:'Arjun',
        like:28,
        comments:7
    }
  }
]
export const Blogs = () => {
  let [data,setData]= useState(BlogArr)
    return (
        <section className="blog-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="section-title text-center">
                        <h3>our blog</h3>
                        <p>
                        Discover the essence of luxury living with exclusive insights, travel tips, and behind-the-scenes stories. Explore the extraordinary through the lens of Lotus Hotel.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="blog-carousel">
             {
              data.map((ele,i)=><BlogCard card={ele} index={i+1} key={i}/>)
             }
          </div>
        </div>
      </div>
    </section>
    )
}