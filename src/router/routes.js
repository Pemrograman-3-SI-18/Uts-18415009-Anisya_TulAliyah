
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Admin/home/DataMebel.vue') },
      { path: 'inputdatamebel', component: () => import('pages/Admin/home/InputDataMebel.vue') },
      { path: 'datatransaksi', component: () => import('pages/Transaksi/DataTransaksi.vue') },
      { path: 'stokmebel', component: () => import('pages/Admin/home/StokMebel.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Admin/home/DataMebel.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/DataMebel/DataMebel.vue') },
      { path: 'datatransaksi', component: () => import('pages/pembeli/Transaksi/DataTransaksi.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/Login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/registrasi.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
