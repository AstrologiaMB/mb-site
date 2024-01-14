"use client";
import { useEffect } from "react";

export default function ClientFont() {
  useEffect(() => {
    (function (d) {
      var config = {
          kitId: "zub8uxw",
          scriptTimeout: 3000,
          async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
          h.className =
            h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = "https://use.typekit.net/" + config.kitId + ".js";
      tk.async = true;
      // @ts-ignore
      tk.onload = tk.onreadystatechange = function () {
        // @ts-ignore
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
          // @ts-ignore
          Typekit.load(config);
        } catch (e) {}
      };
      // @ts-ignore
      s.parentNode.insertBefore(tk, s);
    })(document);
  }, []);

  return <></>;
}
