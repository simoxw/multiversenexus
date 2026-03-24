export function getCharacterFallbackImage(seed: string): string {
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(seed)}`;
}

const imageLookupCache = new Map<string, string | null>();

async function resolveWikipediaImage(characterName: string, franchise?: string): Promise<string | null> {
  const key = `${characterName}::${franchise || ""}`.toLowerCase();
  if (imageLookupCache.has(key)) return imageLookupCache.get(key) || null;

  const franchiseHint =
    franchise === "harry_potter" ? "Harry Potter character"
      : franchise === "final_fantasy" ? "Final Fantasy character"
      : franchise === "disney" ? "Disney character"
      : franchise === "anime" ? "anime character"
      : "fictional character";

  const query = `${characterName} ${franchiseHint}`;
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=512&format=json&origin=*`;

  try {
    const res = await fetch(url);
    const json = await res.json();
    const pages = json?.query?.pages;
    if (!pages) {
      imageLookupCache.set(key, null);
      return null;
    }
    const firstPage = Object.values(pages)[0] as { thumbnail?: { source?: string } } | undefined;
    const image = firstPage?.thumbnail?.source || null;
    imageLookupCache.set(key, image);
    return image;
  } catch {
    imageLookupCache.set(key, null);
    return null;
  }
}

export function bindImageFallbacks(container: ParentNode = document) {
  const images = container.querySelectorAll("img[data-fallback]");
  images.forEach((img) => {
    img.addEventListener("error", async () => {
      const name = img.getAttribute("data-character-name") || "";
      const franchise = img.getAttribute("data-character-franchise") || "";
      const fromWiki = name ? await resolveWikipediaImage(name, franchise) : null;
      if (fromWiki && img.getAttribute("data-wiki-applied") !== "1") {
        img.setAttribute("data-wiki-applied", "1");
        (img as HTMLImageElement).src = fromWiki;
        return;
      }
      const fallback = img.getAttribute("data-fallback");
      if (!fallback || img.getAttribute("data-fallback-applied") === "1") return;
      img.setAttribute("data-fallback-applied", "1");
      (img as HTMLImageElement).src = fallback;
    });
  });
}
