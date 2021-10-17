module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hackmamba_jamstack_hackathon_video_collection/dist/'
    : '/'
}
