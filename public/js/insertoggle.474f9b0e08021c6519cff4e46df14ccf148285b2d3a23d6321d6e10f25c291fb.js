(()=>{(function(){let o=document.querySelectorAll(".toggle-button");function l(t){document.querySelectorAll(".hidden").forEach(e=>{e!==t&&(e.classList.add("close"),e.classList.remove("open"))})}function n(t){let e=t.classList.contains("close");l(t),t.classList.toggle("close",!e),t.classList.toggle("open",e)}o.forEach(t=>{t.addEventListener("click",function(){this.getAttribute("data-target").split(" ").forEach(c=>{let s=document.getElementById(c);s&&n(s)})})}),document.addEventListener("click",function(t){let e=Array.from(document.querySelectorAll(".open"));e.every(s=>!s.contains(t.target)&&!t.target.closest(".toggle-button"))&&e.forEach(s=>{s.classList.remove("open"),s.classList.add("close")})})})();})();
