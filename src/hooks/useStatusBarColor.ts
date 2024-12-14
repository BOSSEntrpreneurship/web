export function updateStatusBarColor(isDark: boolean) {
  // Update standard theme-color
  const themeColor = isDark ? '#111827' : '#ffffff';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);

  // Update Safari status bar style
  const safariStatusBarStyle = isDark ? 'black-translucent' : 'default';
  document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')?.setAttribute('content', safariStatusBarStyle);
}
