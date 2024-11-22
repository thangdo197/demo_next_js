import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "vi", "zh"],
  defaultLocale: "vi",
});

export const config = {
  matcher: ["/", "/(vi|en|zh)/:path*"],
};
