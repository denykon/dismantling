let context = require.context('./src/app/', true, /.+\.test\.jsx?$/);
context.keys().forEach(context);