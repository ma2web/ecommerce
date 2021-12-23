const fs = require("fs");

exports.modules = {
  createDirIfNotExists: async (dir) =>
    new Promise((resolve) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        resolve();
      } else {
        resolve();
      }
    }),
  initApp: () => {
    let dirs = [
      "public/uploads/users",
      "public/uploads/products",
    ];

    for (dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  },
};
// listen mongo strings
