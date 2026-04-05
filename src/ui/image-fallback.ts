/**
 * Returns a consistent Dicebear avatar URL based on a seed.
 * This is used as fallback when no local image exists.
 */
export function getCharacterFallbackImage(seed: string): string {
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(seed)}`;
}

/**
 * Binds error handlers to images with data-fallback attribute.
 * On error, shows the fallback Dicebear avatar directly — no external Wikipedia lookups.
 */
export function bindImageFallbacks(container: ParentNode = document) {
  const images = container.querySelectorAll("img[data-fallback]");
  images.forEach((img) => {
    img.addEventListener("error", () => {
      const fallback = img.getAttribute("data-fallback");
      if (!fallback || img.getAttribute("data-fallback-applied") === "1") return;
      img.setAttribute("data-fallback-applied", "1");
      (img as HTMLImageElement).src = fallback;
    });
  });
}
