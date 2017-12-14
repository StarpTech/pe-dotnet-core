// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      "vendor.js": /^(?!app)/,
      "home.js": /^app/
    }
  },
  stylesheets: {
    joinTo: {
      "app.css": /^app\/styles/,
      "home.css": /^app\/pages\/home/
    }
  }
};
