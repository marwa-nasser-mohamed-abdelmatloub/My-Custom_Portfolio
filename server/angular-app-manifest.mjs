
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9528, hash: '57ea49aafd0da8c6e5f8255260557e6bea286e231c1b3b4afac74305b1835813', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '91619f09794ed22da5e000c7f6fe0eeb2ffdce6cad913ae85dd1f0ae4c73d387', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 26982, hash: 'b09c1977da23ce5c2f0168f98c0267acd9664d2a53e0c50d1ce7e1e146689935', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 24867, hash: '6f528d3e2eeb0aab94ee6f7e800d7be951417227191f1234f29eed89fd767ab7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 29619, hash: 'ae24d86829cbc73ef47eb1cb2f7f8b79012f0a6859d9c395da7ca72f07a3923d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 40174, hash: '7199d352d9aaf29a3c737a0144fc2e757792acf3e5f80c61d27615546cf64ee6', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 29169, hash: '3416b25452729c121739bdbcf6ced3682626e16b8c64e326cf82794d7e3cb520', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-F3HJ6LS7.css': {size: 319169, hash: 'Z4P9X7eI1EA', text: () => import('./assets-chunks/styles-F3HJ6LS7_css.mjs').then(m => m.default)}
  },
};
