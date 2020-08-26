import React,{lazy} from 'react'

const Home = lazy(()=>import('./pages/Home/Home.js'));
const Contacts = lazy(()=>import('./pages/Contacts/Contacts.js'));
const OnlineClass = lazy(()=>import('./pages/OnlineClass/OnlineClass.js'));
const Camp = lazy(()=>import('./pages/Camp/Camp.js'));
const Talks = lazy(()=>import('./pages/Talks/Talks.js'));
const ProjectDev = lazy(()=>import('./pages/ProjectDev/ProjectDev.js'));
const Training = lazy(()=>import('./pages/Training/Training.js'));
const Space = lazy(()=>import('./pages/Space/Space.js'));
const Posts = lazy(()=>import('./pages/Posts/Posts.js'));

const routes = [
    {path:'/', exact: true, name: 'Home', component: Home },
    {path:'/contacts',exact: true, name: 'Contacts',component: Contacts},
    {path:'/online-class',exact: true, name: 'OnlineClass',component: OnlineClass},
    {path:'/camp',exact: true, name: 'Camp',component: Camp},
    {path:'/talks',exact: true, name: 'Talks',component: Talks},
    {path:'/project-dev',exact: true, name: 'ProjectDev',component: ProjectDev},
    {path:'/training',exact: true, name: 'Training',component: Training},
    {path:'/space',exact: true, name: 'Space',component: Space},
    {path:'/posts',exact: true, name: 'Posts',component: Posts},
]

export default routes;