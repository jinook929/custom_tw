const browserSync = require('browser-sync').create();

// CSS and JavaScript file paths
const files = ['./theme/css/*.css', './theme/js/**/*.js', './**/*.php'];

// Start the Browsersync server
browserSync.init(files, {
	// !!! important: replace with your local development URL !!! //
	proxy: 'wp_tw.jinook', // replace with your local development URL
	port: 3030, // Browsersync port
	ui: {
		port: 3033, // or any other free port
	},
	open: false,
});

// Watch files for changes
browserSync.watch(files).on('change', browserSync.reload);