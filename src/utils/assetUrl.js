export const assetUrl = (path, width = 640) =>
  typeof path === "string" &&
  (path.startsWith("/assets/") || path.startsWith("/src/assets/") || path.startsWith("/videos/"))
    ? path
    : typeof path === "string" && path.toLowerCase().endsWith(".svg")
    ? path.startsWith("http")
      ? path
      : `https://clinginfotech.com${path}`
    : `https://clinginfotech.com/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=75`;
