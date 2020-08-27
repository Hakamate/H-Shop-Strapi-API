module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('ec2-54-166-107-5.compute-1.amazonaws.com'),
        port: env.int(5432),
        database: env('d71ik5qf7hl6c'),
        username: env("hvbbiigebinjkz"),
        password: env('453b9d9f700e583586f7d5517dddac67c423fd3747f0bda41a5c88e27ff42e01'),
      },
      options: {
        ssl: false,
      },
    },
  },
});