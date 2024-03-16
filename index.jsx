import renderToString from "preact-render-to-string";
import App from "./App.jsx";

Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/renderer.js") {
      return new Response(Bun.file("./bundle/renderer.js"));
    }

    return new Response(
      `<html>
          <body>
          <div id="app">${renderToString(App())}</div>
          <script src="./renderer.js"></script>
          </body>
        </html>`,
      {
        headers: {
          ["Content-Type"]: "text/html",
        },
      }
    );
  },
});
