import { c as create_ssr_component, e as escape } from './ssr-3a839866.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p>${escape(data.randomNumber)}</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-557fc2b7.js.map
