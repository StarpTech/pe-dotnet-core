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
      "app.css": /^app\/styles/
    }
  }
};

exports.plugins = {
  sass: {
    options: {
      includePaths: ['node_modules/']
    } // tell sass-brunch where to look for files to @import
  },
  copycat: {
    "fonts": [
      "node_modules/font-awesome/fonts"
    ] // copy these files into /public
  }
}