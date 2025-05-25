
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://marwa-nasser-mohamed-abdelmatloub.github.io/My-Custom_Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/My-Custom_Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/My-Custom_Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/My-Custom_Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/My-Custom_Portfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/My-Custom_Portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/My-Custom_Portfolio",
    "route": "/My-Custom_Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9599, hash: 'ec3935ace01dbef143897c36fbfbd70592ab42d5fd5ed0309ee7652d2f709bd4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1129, hash: '7a7857af14a83915f0ec8583a8c87ef586456d0cdce830c4d2c39ffc956d7ba1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25293, hash: 'c0d72ec60d3341a191a9a623682e7bdcce78dbbc5dc5e0a3b78d7e5d129ae47b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 27408, hash: '3a3e053dad62e647e77cbda1a9a5862935713ee76c41506b0c5bf6f518d044c9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 30045, hash: '316e9920b395e484005e9390acfc5c6dc6f1a189386cb6941768e59bb8351857', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 40600, hash: '89aca0bd060fecfd6985c59b5221137654aef404867478cd5a57eff67cbff80f', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 29595, hash: '923de7c1c8cb2cb749dd144cfe7720b63a2af4909cc19927f35413e6c9b95176', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-F3HJ6LS7.css': {size: 319169, hash: 'Z4P9X7eI1EA', text: () => import('./assets-chunks/styles-F3HJ6LS7_css.mjs').then(m => m.default)}
  },
};
