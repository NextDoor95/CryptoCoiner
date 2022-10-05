import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import homeStore from "../stores/homeStore.js";


export default function Home() {

    const store = homeStore();

    React.useEffect (() => {
        store.fetchCoins();
    }, []);

    return (
        <div>
            <Header />
            <header className="home-search">
                <div className="width">
                    <h2>Search for a coin</h2>
                    <input type="text" value={store.query} onChange={store.setQuery} />
                </div>
                
            </header>
            
            {store.coins.map((coin) => {
                return <ListItem key={coin.id} coin={coin} />;
            })}
        </div>
    );
}
