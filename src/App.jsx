import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import { FixedComponent1, FixedComponent2, FixedComponent3 } from "./components/JSXErrors"
import StatusBadge from "./components/StatusBadge"
import UserCard from "./components/UserCard"
import Product from "./components/Prpduct"
import Card from "./components/Card"
import BlogPost from "./components/BlogPost"
import MovieList from "./components/MovieList"
import ToggleButton from "./components/ToggleButton"



function App() {

  
  const movies = [
    { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
    { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
    { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
    { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
  ]

  return (
    <>
      <Greeting />
      <FixedComponent1 />
      <FixedComponent2 />
      <FixedComponent3 />
      <StatusBadge />

      

      <UserCard 
        name="Anas"
        email="anas@example.com"
        role="Developer"
      />

      <UserCard 
        name="marwen"
        email="marwen@example.com"
        role="Designer"
      />

      <UserCard 
        name="amin"
        email="amin@example.com"
        role="aminr"
      />

      <Product
        title="Laptop"
        price={99.99}
        inStock={true}
        rating={4.5}
      />

      <Product 
        title="Phone"
        price={499}
        inStock={false}
        rating={4}
      />

      <Product 
        title="Headphones"
        price={99}
        inStock={true}
        rating={5}
      />

      <Card title="Card 1">
        <p>Hello from Card 1.</p>
      </Card>
      
      <Card title="Card 2">
        <p>This is Card 2 content.</p>
      </Card>
      
      <Card title="Card 3">
        <p>Card 3 says hi!</p>
      </Card>


      <BlogPost
        title="Learning React"
        name="Alice"
        email="alice@example.com"
        role="Developer"
        content="React makes building UI easier."
        date="Jan 15"
      />

      <BlogPost
        title="React Tips"
        name="Bob"
        email="bob@example.com"
        role="Designer"
        content="Use components to organize your UI."
        date="Jan 20"
      />


      <MovieList movies={movies} />
      <ToggleButton />
    </>
  )
}

export default App
