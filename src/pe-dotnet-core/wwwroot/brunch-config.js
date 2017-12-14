const postcss = require('postcss')
const csswring = require('csswring')
const production = process.env.NODE_ENV === 'production'

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

const postCssProcessors = [require('autoprefixer')(['last 2 versions'])]

if(production) {
  postCssProcessors.push(csswring())
}

exports.plugins = {
  postcss: {
    processors: postCssProcessors
  },
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

// Turn off growl
exports.notifications = false