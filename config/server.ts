export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "b47cfb9b7ad87fe068fe4e90f5cdeeaba1ee7455ade895ab5711ba743f80575a",
      "8c3aec4de919760b2eccccb46558525232b326c8a430169298381a364ffd4813",
    ]),
  },
});
