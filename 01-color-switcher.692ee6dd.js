const t={bodyColor:document.querySelector("body"),buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]")};function o(){t.bodyColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.buttonStart.addEventListener("click",(function(){t.buttonStart.hasAttribute("disabled")||(t.buttonStart.setAttribute("disabled","disabled"),t.buttonStop.removeAttribute("disabled"));timerID=setInterval(o,1e3),console.log("старт")})),t.buttonStop.addEventListener("click",(function(){t.buttonStop.hasAttribute("disabled")||(t.buttonStop.setAttribute("disabled","disabled"),t.buttonStart.removeAttribute("disabled"));clearInterval(timerID),console.log("стоп")}));
//# sourceMappingURL=01-color-switcher.692ee6dd.js.map
