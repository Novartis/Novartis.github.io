const execa = require('execa');
const { join, resolve } = require('path');

exports.demo = async function demo() {
  const { VERSION = 'v0.0.0-rolling' } = process.env;
  const BASEPATH = `/artifactory/nibr-web/mullery1/osi-new-site/${VERSION}.zip!`;
  await execa('npx', ['sapper', 'export', ...(BASEPATH ? ['--basepath', BASEPATH] : [])], {stdio:'inherit', env: {...process.env, BASEPATH}});
  await execa('zip', ['-r', resolve(__dirname, `${VERSION}.zip`), '.'], {
    cwd: resolve(join(__dirname, '__sapper__/export'), `.${BASEPATH}`),
    stdio: 'inherit',
    env: {...process.env, BASEPATH}
  });
}