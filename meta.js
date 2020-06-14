const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {

      console.log(JSON.stringify(options))
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "appid": {
      "type": "string",
      "required": false,
      "message": "wxmp appid",
      "default": "touristappid"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Mpvue project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        // {
        //   "name": "Runtime + Compiler: recommended for most users",
        //   "value": "standalone",
        //   "short": "standalone"
        // },
        {
          "name": "Runtime-only: no custom render function, only can compile template in *.vue",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "ui": {
      "type": "list",
      "message": "Pick an ui component library",
      "choices": [
        {
          "name": "Vant (with es6 dist https://youzan.github.io/vant-weapp/#/quickstart)",
          "value": "vant",
          "short": "vant"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "vuex": {
      "type": "confirm",
      "message": "Use Vuex?"
    },
    "router": {
      "type": "confirm",
      "message": "Use Router?"
    },
    // "lint": {
    //   "type": "confirm",
    //   "message": "Use ESLint to lint your code?"
    // },
    // "lintConfig": {
    //   "when": "lint",
    //   "type": "list",
    //   "message": "Pick an ESLint preset",
    //   "choices": [
    //     {
    //       "name": "Standard (https://github.com/feross/standard)",
    //       "value": "standard",
    //       "short": "Standard"
    //     },
    //     {
    //       "name": "Airbnb (https://github.com/airbnb/javascript)",
    //       "value": "airbnb",
    //       "short": "Airbnb"
    //     },
    //     {
    //       "name": "none (configure it yourself)",
    //       "value": "none",
    //       "short": "none"
    //     }
    //   ]
    // },
    "test": {
      "value": false,
      "message": "小程序测试，敬请关注最新微信开发者工具的“测试报告”功能"
    }
  },
  "filters": {
    "build/webpack.base.conf.js": "ui",
    "src/app.json": "ui",
    "src/pages/index/*": "ui",
    "package.json": "ui",
    "tsconfig.json": "ui",
    "src/pages/counter/*": "vuex",
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  }
};
