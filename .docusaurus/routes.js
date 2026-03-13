import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ba7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/leahunderhill',
    component: ComponentCreator('/blog/authors/leahunderhill', '466'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '95a'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '755'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '25a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '884'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '912'),
            routes: [
              {
                path: '/docs/about-me',
                component: ComponentCreator('/docs/about-me', '83b'),
                exact: true,
                sidebar: "aboutMeSidebar"
              },
              {
                path: '/docs/projects',
                component: ComponentCreator('/docs/projects', '43e'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
