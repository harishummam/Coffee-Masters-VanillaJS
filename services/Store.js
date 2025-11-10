const Store = {
  menu: null,
  cart: [],
};

/*
A proxy is a wrapper object that lets you intercept and modify operations performed on a wrapped object, 
allowing custom behavior or validation of object properties and methods. 
It acts like an event listener for data changes.
Can be used for data validation, adding custom behaviour to objects, respond to data changes etc
*/

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property == "menu") {
      window.dispatchEvent(new Event("appmenuchange"));
    }
    if (property == "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
});

export default proxiedStore;
