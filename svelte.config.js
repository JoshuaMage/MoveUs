import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    // Other kit options...
    adapter: adapter({
      pages: 'build',         // The directory where the built pages will be placed
      assets: 'build',        // The directory where the assets will be placed
      fallback: 'index.html', // For single-page applications (SPA)
      precompress: true,      // To precompress files (gzip)
      strict: true            // Enforce strict routing
    })
  }
};

export default config;
