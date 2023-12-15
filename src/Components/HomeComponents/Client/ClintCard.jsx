import { Link } from "react-router-dom"




export const ClientCard = ({index}) => {
    return(
        <div className="single-client">
        <div className="client-image">
          <Link href="#">
            <img src={`https://htmldemo.net/oestin/oestin/img/client/${index}.png`} alt="" className="s-img" />
            {/* <img src={`img/client/${index}-hover.png`} alt="" className="s-img" /> */}
          </Link>
        </div>
      </div>
    )
}