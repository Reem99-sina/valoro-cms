module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET',"+CkMDzT7R/ZY2TPiW8CAYJM4qYv/sidNcVCm5E9U8vk="),
    },
  },
});
