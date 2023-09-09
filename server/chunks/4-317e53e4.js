const load = () => {
  return {
    randomNumber: Math.random().toString()
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-557fc2b7.js')).default;
const server_id = "src/routes/ssr/+page.server.ts";
const imports = ["_app/immutable/nodes/4.49f752e3.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.d47c8428.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-317e53e4.js.map
