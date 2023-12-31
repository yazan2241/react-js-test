import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH , AUTH_PREFIX_PATH } from 'configs/AppConfig'


export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/clients`} component={lazy(() => import(`./clients`))} />
        <Route path={`${APP_PREFIX_PATH}/chess`} component={lazy(() => import(`./chess`))} />
        <Route path={`${APP_PREFIX_PATH}/edit-profile/:id`} component={lazy(() => import('./editProfile'))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/clients`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);