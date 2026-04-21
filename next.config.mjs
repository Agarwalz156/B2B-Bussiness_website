import { fileURLToPath } from 'url';
import path from 'path';

const nextConfig = {
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
};

export default nextConfig;
