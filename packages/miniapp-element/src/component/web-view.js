const mp = require('miniapp-render');

const {
  cache,
  tool,
} = mp.$$adapter;

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */
export default {
  PROPS: [{
    name: 'src',
    get(domNode) {
      const window = cache.getWindow(domNode.$$pageId);
      return domNode.src ? tool.completeURL(domNode.src, window.location.origin, true) : '';
    },
  }],
  handles: {
    onWebviewMessage(evt) {
      this.callSimpleEvent('message', evt);
    },

    onWebviewLoad(evt) {
      this.callSimpleEvent('load', evt);
    },

    onWebviewError(evt) {
      this.callSimpleEvent('error', evt);
    },
  },
};