{
    "name": "Gcopy",
    "version": "0.0.1",
    "manifest_version": 2,
    "description": "Gmail template",
    "homepage_url": "https://www.google.com",
    "icons": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    },
    "default_locale": "en",
    "background": {
      "scripts": [
        "src/bg/background.js"
      ],
      "persistent": true
    },
    "options_page": "src/options_custom/index.html",
    "browser_action": {
      "default_icon": "icons/icon19.png",
      "default_title": "browser action demo",
      "default_popup": "src/browser_action/browser_action.html"
    },
    "permissions": [
      "contentSettings",
      "http://*/*",
      "https://*/* "
    ],
    "content_scripts": [{
      "matches": [
        "http://*/*",
        "https://*/* "
      ],
      "js": [
        "src/inject/inject.js"
      ]
    }]
  }