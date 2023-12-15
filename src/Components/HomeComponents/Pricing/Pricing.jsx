
import { TitleDescription } from "../TitleDescription";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {


    return (
        <section className="pricing-area ptb-90">
        <div className="container">
            
        <TitleDescription title='OUR PRICING' desc='
        Explore our tailored packages at Lotus Haven'  />
        

            <div className="row price_container" >
                <PricingCard
                 title='Platinum Experience'
                 Price='1999'
                 clas='2'
                />
                <PricingCard
                 title='Gold Retreat'
                 Price='3999'
                 clas='1'
                />
                <PricingCard
                 title='Lotus Essentials'
                 Price='4999'
                 clas='0'
                />
            </div>
        </div>
    </section>
    )
} 