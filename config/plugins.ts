module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET',"tYbZLOd7Iybf0og8GW6BDQ=="),
    },
  },
});
