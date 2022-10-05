import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
    return (
        <div>
            <Link to={`/${coin.id}`}>{coin.name}
            </Link>
        </div>
    );
}
