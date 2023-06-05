"use strict";
//import config from "../config.js";

//const config = JSON.parse(window.localStorage.getItem("clientConfig"))


export const getById = (id) => document.getElementById(id);

export const selectNode = (name) => {
  return document.querySelector(name);
};


export const createNode = (name, option) => {
  const el = document.createElement(name);
  if (option instanceof Function) {
    return option(el);
  }
  if (option instanceof Object) {
    if (option.children) {
      el.children = option.children;
    }
    if(hasProp(option,"attributes") && isObject(option.attributes)){
      for(let key in option.attributes){
      //  console.log(key)
        el.setAttribute(key, option.attributes[key])
      }
    }
    if(hasProp(option,"attributes") && isArray(option.attributes)){
      option.attributes.forEach(attr=>{
      if(!(hasProp(attr,"key")
      && hasProp(attr,"value"))) throw new Error("option.attributes must be an array of Object with {key:String, value:String} format")
        el.setAttribute(attr.key, attr.value)
      })
    }
    
  }
  if (typeof option === "string") {
    el.innerHTML = option;
  }
  return el;
};

export const isObject = (d) => d?.constructor?.name === "Object";


export const hasProp = (d, i) => isObject(d) && Object.keys(d).includes(i);


export const isString = (d) => d?.constructor?.name === "String";


export const isArray = (d) => d?.constructor?.name === "Array";


export const isFunc = (d) => d?.constructor?.name === "Function";


export const isHtmlElement = (d) => d?.constructor?.name.startsWith("HTML");


export const getType = (d) => d?.constructor?.name;


export const dotToCamel = (d) => {
  if (d.includes(".")) {
    const t = [...d];
    const v = t.indexOf(".");
    t.splice(v, 1, t.at(v + 1).toUpperCase());
    t.splice(v + 1, 1);
    return t.join("");
  }
  return d;
};


export const toMap = (obj, seperator = ".", gum = "=") => {
  let result = [];
  const map = new Map();
  const traverse = (o, path = "") => {
    for (let key in o) {
      let value = o[key];
      if (isObject(value) && Object.keys(value).length > 0) {
        traverse(value, path + key + seperator);
      } else {
        result.push(`${path + key}${gum}${value}`);
        map.set(`${path}${key}`, value);
      }
    }
  };
  traverse(obj);
  return map;
};


export const getProps = (d) => {
  if (d?.constructor?.name === "Object") {
    return Object.keys(d);
  }
  throw new Error(getProps.name, "Object argument required");
};
