import Topfold from "../../Topfold";
import "./home.css";
import React from "react";
import ExpenseList from "../../expense-list";
const Home = () => {
    return (
        <div className="home">
            <Topfold />   
            <ExpenseList />
        </div>
    )
}

export default Home;