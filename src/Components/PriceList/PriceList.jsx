import { list } from "postcss";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    return (
        <div className="grid md:grid-cols-3 gap-5 mt-9 mx-6">
            {
                prices.map(price => 
                <Card
                key = {price.id}
                price = {price} 
                ></Card>)
            }


        </div>
    );
};

export default PriceList;