const components = {
  login: {
    component: 'Login',
    url: '/login',
  },
  signup: {
    component: 'Signup',
    url: '/signup',
  },
  changepassword: {
    component: 'ChangePwd',
    url: '/changepassword',
  },
  home: {
    component: 'Home',
    url: '/home',
  },
  myacc: {
    component: 'MyAcc',
    url: '/myaccount',
  },
  accview: {
    component: 'AccView',
    url: '/account-view',
  },
  addacc: {
    component: 'AddAcc',
    url: '/addaccount',
  },
  settings: {
    component: 'Settings',
    url: '/settings',
  },
  logout: {
    component: 'Login',
    url: '/login',
  },
  transfer: {
    component: 'Transfer',
    url: '/transfer',
  },
  transferform: {
    component: 'TransferForm',
    url: '/transferform',
  },
  transection: {
    component: 'TransView',
    url: '/transection',
  },
  transectionlist: {
    component: 'TransList',
    url: '/transfer-list',
  }
};

export default {
  //role name as a key.
  ADMIN: {
    routes: [...Object.values(components)],
  },
  USER: {
    routes: [
      components.changepassword,
      components.home,
      components.accview,
      components.addacc,
      components.transection,
      components.transectionlist,
      components.transfer,
      components.transferform,
      components.logout,
      components.myacc,
      components.settings
    ],
    redirect: ['/home']
  },
  guest: {
    routes: [
      components.login,
      components.signup,

    ],
    redirect: ['/login']
  }
}