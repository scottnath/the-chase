var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

/*********************************************
Application-based gulp tasks and overrides
*/
var appGulpDir = './app/_gulp';
try {
  // require all files in APP's gulp directory
  requireDir(appGulpDir, { recurse: true });
}
catch (e) {
  console.log('Gulp app directory does not exist')
  console.log(e)
}
