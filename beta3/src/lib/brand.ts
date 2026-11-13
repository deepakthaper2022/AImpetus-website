// The "AI" legibility rule (brief/brand.md): in Space Grotesk the capital I looks
// like a lower-case l. Wrap the I of "AI" (including "AImpetus") so it renders in
// the serifed "AImpetus I" font. Use with set:html on headings only.

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function brandify(text: string): string {
  return escape(text).replace(/AI/g, 'A<span class="brand-i">I</span>');
}
