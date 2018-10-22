const { FuseBox, WebIndexPlugin, BabelPlugin, CSSPlugin } = require('fuse-box');
const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: 'build/$name.js',
  sourceMaps: true,
  plugins: [
    WebIndexPlugin({
      template: './src/assets/index.html',
    }),
    BabelPlugin({
      config: {
        sourceMaps: true,
        presets: ['env', 'react', 'stage-0'],
        plugins: ['transform-runtime'],
      },
    }),
    CSSPlugin(),
  ],
});

fuse.dev();
fuse
  .bundle('app')
  .instructions(' > app/index.jsx')
  .hmr()
  .watch('src/**');
fuse.run();
