"use strict";
import Intent from "./lib/Intent.js";
import { createLauncher, createStyle } from "./bootstrap.js";

import { isFunc, isString, isHtmlElement, hasProp } from "./lib/common.js";
import { useWindow, useSound } from "./lib/hooks.js";
import Index from "./pages/Index.js";
//import UserInfoCollectionForm from "./pages/UserInfoCollectionForm.js";
//import GetStarted from "./pages/GetStarted.js";
class Zuma {
#soundSet = null //useSound()
  #config;
  #pos = {
    "top-left": `top-10 left-10`,
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
  };
  #launcherPosition;
  #launcherCustomStyling;
  #launcher;
  #launched = false; //= Intent.launched;
  constructor(launcher) {
    this.launcher = launcher;
    this.#prepareMedia()
  }
  async #prepareMedia(){
    this.#soundSet = await useSound()
  }
  presets() {
    this.#setLauncher(this.launcher);
    this.setLauncherPosition("bottom-right");
  }
  refreshOnSchemeChange() {
    // console.log("Scheme changed", this);
    this?.intent.refresh(this?.intent);
  }

  setLauncherPosition(pos) {
    if (Object.keys(this.#pos).includes(pos)) {
      return (this.#launcherPosition = this.#pos[pos]
        .split(" ")
        .map((u) => `${this.getConfig().prefix}${u}`)
        .join(" "));
    }
    if (Object.values(this.#pos).includes(pos)) {
      return (this.#launcherPosition = pos);
    }
    throw new Error("Invalid launcher position format detected: " + pos);
  }
  getLauncherPositions(pos) {
    return this.#pos;
  }
  setLauncherCustomStyling(tw) {
    if (!isString(tw))
      throw new Error(
        `Launcher.position expects String. ${tw?.constructor?.name} received`
      );
    this.#launcherCustomStyling = tw?.trim();
  }

  #setLauncher(launcher) {
    if (!isHtmlElement(launcher)) {
      throw new Error("launcher must be of type HTMLElement");
    }
    launcher.classList.add("z-10");
    launcher.classList.add("fixed");
    launcher.classList.add("flex");
    launcher.classList.add("bg-red-500");
    launcher.classList.add("justify-start");
    launcher.classList.add("items-center");
   // launcher.classList.add("h-[100px]");
    launcher.classList.add("w-[100%]");
    launcher.classList.add("max-w-[80%]");
    launcher.classList.add("bottom-10");
    launcher.classList.add("right-10");
    // launcher.style.position="relative"
    this.#launcher = launcher;
  }

  #startActivity(btn) {
   // this.#launcher.
    btn?.addEventListener("click", () => {
      const app = useWindow();
      app.onOpen = this?.onOpen;
      app.onClose = this?.onClose;
      if (
        Object.hasOwn(this, "onOpen") &&
        isFunc(this.onOpen) &&
        !app.launched
      ) {
        app.onOpen(() => {
          app.launched = true;
          this.#activate();
        }, app.launcher);
      }
    });
  }
  setConfig(c) {
    this.#config = c;
  }
  getConfig() {
    return this.#config;
  }
  #activate() {
    const { Activity } = new Intent().createActivity();
    Activity.createChildren(
      //Index)
      Index,
      new Map().set("fullname", "Guest")
    );
    //this.intent = Activity;
  }
  createPopover(container) {
    setTimeout(() => {
      const popover = container.nextNode("Hi, Need some help?");
      this.#soundSet[1](this.#soundSet[0].RECEIVED)
      popover.setCss("absolute w-auto p-2 !bg-white !text-slate-500 rounded-lg right-20 bottom-2");
      const popOverBtn = popover.nextNode(null, "button").setCss("fa fa-times !text-black p-2 !bg-inherit absolute -top-5 -left-5 rounded-full")
      popOverBtn.addEventListener("click",()=>{
        popover.remove()
      },false)
      setTimeout(()=>popover.remove(),30000)
    }, 2500);
  }
  run() {
    createStyle().then((shouldStart) => {
      const btn = createLauncher({
        pos: this.#launcherPosition,
        tw: this.#launcherCustomStyling,
        config: this.getConfig(),
      });
      setTimeout(async () => {
        this.#launcher.appendChild(btn);
        this.createPopover(this.#launcher);
      this.#startActivity(btn);
      }, 2000);
      useWindow().launcher = btn;
    });
  }
}

export default Zuma;
