import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/personal-webbie/blog',
    component: ComponentCreator('/personal-webbie/blog', 'c1d'),
    exact: true
  },
  {
    path: '/personal-webbie/blog/archive',
    component: ComponentCreator('/personal-webbie/blog/archive', 'f21'),
    exact: true
  },
  {
    path: '/personal-webbie/blog/authors',
    component: ComponentCreator('/personal-webbie/blog/authors', 'af8'),
    exact: true
  },
  {
    path: '/personal-webbie/blog/authors/leahunderhill',
    component: ComponentCreator('/personal-webbie/blog/authors/leahunderhill', 'b43'),
    exact: true
  },
  {
    path: '/personal-webbie/blog/tags',
    component: ComponentCreator('/personal-webbie/blog/tags', '4a7'),
    exact: true
  },
  {
    path: '/personal-webbie/blog/tags/hello',
    component: ComponentCreator('/personal-webbie/blog/tags/hello', 'f9d'),
    exact: true
  },
  {
    path: '/personal-webbie/blog/welcome',
    component: ComponentCreator('/personal-webbie/blog/welcome', 'aeb'),
    exact: true
  },
  {
    path: '/personal-webbie/Home/Home',
    component: ComponentCreator('/personal-webbie/Home/Home', 'b23'),
    exact: true
  },
  {
    path: '/personal-webbie/docs',
    component: ComponentCreator('/personal-webbie/docs', '2e2'),
    routes: [
      {
        path: '/personal-webbie/docs',
        component: ComponentCreator('/personal-webbie/docs', '40f'),
        routes: [
          {
            path: '/personal-webbie/docs',
            component: ComponentCreator('/personal-webbie/docs', 'ffe'),
            routes: [
              {
                path: '/personal-webbie/docs/about-me',
                component: ComponentCreator('/personal-webbie/docs/about-me', '28c'),
                exact: true,
                sidebar: "aboutMeSidebar"
              },
              {
                path: '/personal-webbie/docs/projects',
                component: ComponentCreator('/personal-webbie/docs/projects', '7fc'),
                exact: true,
                sidebar: "aboutMeSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/personal-webbie/',
    component: ComponentCreator('/personal-webbie/', 'b88'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
