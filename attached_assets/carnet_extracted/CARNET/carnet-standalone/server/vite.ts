import type { Express } from 'express';
import { createServer as createViteServer } from 'vite';

export default {
  async listen(app: Express, port: number, callback?: () => void) {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        cors: true,
        fs: {
          allow: ['..'],
        },
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);

    app.listen(port, callback);
  },
};
