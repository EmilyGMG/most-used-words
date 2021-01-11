module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
    pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        win: {
          icon: './icon.png'
        }
      }
    }
  }
}

