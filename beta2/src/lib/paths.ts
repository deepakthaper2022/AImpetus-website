// Every internal link and asset must respect the base path ('/beta2/').
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** url('services/') -> '/beta2/services/'. url('') -> '/beta2/'. */
export function url(path = ''): string {
  return BASE + path.replace(/^\//, '');
}

/** Absolute URL on the live domain, for Open Graph tags. */
export function absoluteUrl(path = ''): string {
  return new URL(url(path), import.meta.env.SITE).href;
}

/** Normalise a pathname for comparing against nav items. */
export function isCurrent(currentPath: string, itemPath: string): boolean {
  const here = currentPath.replace(/\/?$/, '/');
  const target = url(itemPath);
  return target === url('') ? here === target : here.startsWith(target);
}
