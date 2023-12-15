import { ClientCard } from "./Client/ClintCard"

let clintArr = Array(5).fill(0)
export const Clientarea = () => {
    return(
        <div className="client-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="client-carousel">
           {
            clintArr.map((ele,i)=>(<ClientCard index={i+1} key={i}/>))
           }
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}