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
      "theme.css": /^app\/styles/
    }
  }
};
