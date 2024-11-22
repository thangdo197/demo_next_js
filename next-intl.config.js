import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Danh sách các ngôn ngữ được hỗ trợ
  locales: ["en", "vi", "zh"],

  // Ngôn ngữ mặc định
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en|zh)/:path*"],
};
