import app from './App.vue'
import appChild from './AppChild.vue'

// ?inline can not handle import url() in css therefore fonts are not loaded, workaround is to add font css to the App.vue
import style from './style.css?inline' 

import { pluginsWrapper } from './plugins'

import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
// import createWebComponent  from '../../package/index.js'
// import { createWebComponent }  from '../../package/index.js'

//////////////////////////////////////////////////////////////////////////////////////
////// in real use case, you should import createWebComponent from 'vue-web-component-wrapper'
import { createWebComponent } from 'vue-web-component-wrapper'
// add vue-web-component-wrapper to package.json asl well

createWebComponent({
  rootComponent: app,
  elementName: 'my-web-component',
  plugins: pluginsWrapper,
  cssFrameworkStyles: style,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
})

createWebComponent({
  rootComponent: appChild,
  elementName: 'my-child-component',
  plugins: pluginsWrapper,
  cssFrameworkStyles: style,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
})