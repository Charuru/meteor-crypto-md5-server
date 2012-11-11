Package.describe({
  summary: "MD5 Package for Crypto.js, standard secure algorithms"
});

Package.on_use(function (api) {
  api.use('crypto-base', ['server']);
  api.add_files('md5.js', ['server']);
});
