import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite 配置文件
// 配置开发服务器在 0.0.0.0 上运行，允许所有主机访问，并使用端口 51052
export default defineConfig({
  plugins: [react()],
  server: {
    port: 51052,
    host: '0.0.0.0',
    cors: true,
  },
});
