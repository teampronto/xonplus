export interface Env {
    // Add your environment variables and bindings here
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const { request } = context;
    const url = new URL(request.url);

    return Response.json({
        message: 'API route working!',
        path: url.pathname
    });
} 