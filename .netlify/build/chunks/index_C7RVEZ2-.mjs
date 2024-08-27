/* empty css                         */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderSlot, b as createAstro, f as renderComponent, m as maybeRenderHead } from './astro/server_MWYCRhni.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/vrivera/dev/18-septiembre/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CUANTO FALTA PARA EL 18" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-white text-4xl text-center py-2">
Cuánto falta para el 18
</h1> ${renderComponent($$result2, "Counter", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/vrivera/dev/18-septiembre/src/components/Counter.jsx", "client:component-export": "default" })} </main> ` })}`;
}, "/home/vrivera/dev/18-septiembre/src/pages/index.astro", void 0);

const $$file = "/home/vrivera/dev/18-septiembre/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
