import React,{lazy} from 'react'

const Home = lazy(()=>import('./pages/Home/Home.js'));


const routes = [
    {path:'/', exact: true, name: 'Home', component: Home },
]

export default routes;