export default [{
    path: "/",
    component: () => import("@/components/Login")
  },
  {
    path: '/movie',
    component: () => import('../../views/Movie'),
    children: [{
        path: 'city',
        component: () => import('@/components/City')
      },
      {
        path: 'nowPlaying',
        component: () => import('@/components/NowPlaying')
      },
      {
        path: 'comingSoon',
        component: () => import('@/components/ComingSoon')
      }
      // {
      //   path: 'search',
      //   componet: () => import('@/components/Search')
      // }
    ]
  }
]
