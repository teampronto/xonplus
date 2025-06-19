import { ExecutionContext } from '@cloudflare/workers-types';

interface Env {
    ASSETS: {
        fetch: (request: Request) => Promise<Response>;
    }
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const { request, env, next } = context;
    const url = new URL(request.url);

    // If this is an API request, let it pass through to the API handler
    if (url.pathname.startsWith('/api/')) {
        return next();
    }

    // Try to serve static assets
    try {
        const response = await env.ASSETS.fetch(request);
        if (response.status !== 404) {
            return response;
        }
    } catch (e) {
        // Asset not found, continue to SPA handling
    }

    // For SPA routes, serve the index.html
    const response = await env.ASSETS.fetch(new Request(url.origin + '/index.html', request));
    return new Response(response.body, {
        ...response,
        headers: {
            ...response.headers,
            'content-type': 'text/html; charset=utf-8',
        },
    });
} 