import createProxyMiddleware from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_API_URL,
  followRedirects: true,
  logLevel: "error",
  changeOrigin: true,
  pathRewrite: { [`^/api/`]: "" },
  secure: false,
  xfwd: true,
  ws: true,
  onProxyRes: (proxyRes, req, res) => {
    // log errors
    if (parseInt(proxyRes.statusCode) >= 400) {
      const exchange = `[${req.method}] [${proxyRes.statusCode}] ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path}`;
      console.log(exchange, "kfdjhkj"); // [GET] [200] / -> http://www.example.com
    }
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function(req, res) {
  apiProxy(req, res, result => {
    if (result instanceof Error) {
      throw result;
    }
    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}
