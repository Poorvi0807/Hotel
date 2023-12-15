import { Link } from "react-router-dom"
// {
//     title:'',
//     description:'',
//     date:'',
//     profile:{
//         name:'',
//         like:'',
//         comments:''
//     }
//   }

export const BlogCard = ({card,index}) => {
    let{title,description,date,profile:{name,like,comments}}=card
    return(
    <div className="col-12">
        <div className="single-blog-wrapper">

         <div className="single-blog" >

            <div className="blog-image" >
              <img src={`img/blog/${index}.jpg`} alt="" />
            </div>

            <div className="blog-text">
              <span className="time"><i className="fa-regular fa-clock"></i>{date}</span>
              <h3>{card.title}</h3>
            </div>

          </div>

          <div className="blog-hover">
               <span><i className="fa-regular fa-clock"></i>{date}</span>
                 <h3><Link to="#">{title}</Link></h3>
                 <p>{description}
                 </p>
          <div className="post-info">
                <span><Link to="#"><i className="fa-solid fa-user"></i>{name}</Link></span>
               <span><Link to="#"><i className="fa-solid fa-heart"></i>{like}</Link></span >
              <span><Link to="#"><i className="fa-solid fa-comments"></i>{comments}</Link></span>
          </div>
            <Link to="#" className="default-btn">Read more</Link>
         </div>

        </div>
    </div>
    )
}