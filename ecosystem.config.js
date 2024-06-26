module.exports = {
  apps: [
    {
      name: "frontend",
      script: "node_modules/.bin/next",
      args: "start -p 3001",
      cwd: "/home/ubuntu/jutopia-front",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
