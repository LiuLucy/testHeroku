import React,{ Suspense,lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';
function DefaultLayout() {
    const DefaultFooter = lazy(() => import('./DefaultFooter'));
    const DefaultHeader = lazy(() => import('./DefaultHeader'));
  
  return (
    <div className="App">
        {/* header */}
        <DefaultHeader />

        <Suspense fallback={<div>載入中...</div>}>
            <Switch>
                {routes.map((route,i)=>{
                {/* 判斷有沒有填入component */}
                    return route.component?(
                        <Route 
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props=><route.component {...props} />}
                        />
                    ):(null);
                })}
                <Redirect from='/' to='/'/>
            </Switch>
        </Suspense>

        {/* footer */}
        <DefaultFooter />
    </div>
  );
}
export default DefaultLayout;