// Links that leave the site (or open a file like the resume PDF) open in a new tab.
// In-page links (#work) and mailto: links are left alone.
export function linkAttrs(href: string) {
  const opensNewTab = /^https?:\/\//.test(href) || href.endsWith('.pdf');
  return opensNewTab ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };
}
