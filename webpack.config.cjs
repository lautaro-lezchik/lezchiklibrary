const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// webpack.config.js

module.exports = {
    // ... other webpack configuration settings ...
    entry: './src/index.ts', // Adjust the path to match your library's main file.
    devtool: 'source-map',
    mode: 'production', // Set to 'development' or 'production' as needed.
  
    plugins: [
    
        // Add the BundleAnalyzerPlugin
        new BundleAnalyzerPlugin(),
      ],
  };
  