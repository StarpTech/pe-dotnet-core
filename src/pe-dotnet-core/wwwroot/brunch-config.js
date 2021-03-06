const csswring = require("csswring");
const production = process.env.NODE_ENV === "production";

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
      "vendor.css": /^(?!app\/styles)/
    }
  }
};

// Configures NPM integration for front-end packages
exports.npm = {
  styles: {
    chartist: ["dist/chartist.css"],
    leaflet: ["dist/leaflet.css"],
    "leaflet.markercluster": [
      "dist/MarkerCluster.css",
      "dist/MarkerCluster.Default.css"
    ]
  }
};

const postCssProcessors = [require("autoprefixer")(["last 2 versions"])];

if (production) {
  postCssProcessors.push(csswring());
}

exports.plugins = {
  postcss: {
    processors: postCssProcessors
  },
  sass: {
    options: {
      includePaths: ["node_modules/"]
    } // tell sass-brunch where to look for files to @import
  },
  copycat: {
    fonts: ["node_modules/font-awesome/fonts"] // copy these files into /public
  }
};

// Turn off growl
exports.notifications = false;
