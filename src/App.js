import React,{ lazy,Suspense } from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom'
import './style/Style.css';
function App() {
  const DefaultLayout = lazy(()=>import('./DefaultLayout/DefaultLayout'));
  return (
    <BrowserRouter>
      <Suspense fallback={<div>載入中...</div>}>
        <Switch>
          <Route path='/' name="Home" render={props=><DefaultLayout {...props}/>}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;