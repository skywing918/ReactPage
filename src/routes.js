import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Customers = Loadable({
    loader: () => import('./views/Customers/Customers'),
    loading: Loading,
});
const Customer = Loadable({
    loader: () => import('./views/Customers/Customers/Customer'),
    loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/System/Users/Users'),
  loading: Loading,
});

const User = Loadable({
    loader: () => import('./views/System/Users/User'),
  loading: Loading,
});

const CreateUser = Loadable({
    loader: () => import('./views/System/Users/Create'),
    loading: Loading,
});

const Roles = Loadable({
    loader: () => import('./views/System/Roles/Roles'),
    loading: Loading,
});

const Role = Loadable({
    loader: () => import('./views/System/Roles/Role'),
    loading: Loading,
});

const Logs = Loadable({
    loader: () => import('./views/System/Logs/Logs'),
    loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/system', exact: true, name: 'System', component: Users },
  { path: '/system/users', exact: true,  name: 'Users', component: Users },
  { path: '/system/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/system/userscreate', exact: true, name: 'Create User', component: CreateUser },
  { path: '/system/roles', exact: true, name: 'Roles', component: Roles },
  { path: '/system/roles/:id', exact: true, name: 'Role Details', component: Role },
  

  { path: '/customers', exact: true, name: 'Customer', component: Customers },
  { path: '/customers/customers', exact: true, name: 'Customers', component: Customers },
  { path: '/customers/customers/:id', exact: true, name: 'Customer Details', component: Customer },

  { path: '/logs', exact: true, name: 'System logs', component: Logs },
  { path: '/system/logs', exact: true, name: 'Logs', component: Logs },
  //{ path: '/system/users/:id', exact: true, name: 'User Details', component: User },
    
];

export default routes;