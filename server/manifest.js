const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.4c950bc3.js","app":"_app/immutable/entry/app.bc086b50.js","imports":["_app/immutable/entry/start.4c950bc3.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/singletons.d55d6c25.js","_app/immutable/chunks/index.14349a18.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.bc086b50.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.d47c8428.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-dabe2825.js')),
			__memo(() => import('./chunks/1-cabf0d2e.js')),
			__memo(() => import('./chunks/2-42164797.js')),
			__memo(() => import('./chunks/4-317e53e4.js')),
			__memo(() => import('./chunks/5-069e9851.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/ssr",
				pattern: /^\/ssr\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/about","/sverdle/how-to-play"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
