import React from 'react'
import "./expnse-list.css";
import Card from "./card";

const expenseList = () => {
  const list = [{
    title: "Made a purchase",
    logo: "djhdj",
    createdAt: Date.now(),
    amount: 1324,
  },
  {
    title: "Made a purchase",
    logo: "djhdj",
    createdAt: Date.now(),
    amount: 1324,
  }]
  return (
    <div>{list.length ? list.map((item) => <Card item={item}/>) : null}</div>
  )
}

export default expenseList