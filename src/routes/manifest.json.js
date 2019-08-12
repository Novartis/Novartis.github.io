import { resolve } from 'path';

// Super hack! Instead of hardcoding `manifest.json`,
// write it dynamically so it gets generated on `sapper export`.
export function get(req, res) {
  let basepath = req.session.basepath;
  if (!basepath) basepath = '/';
  let scope = basepath;
  if (!scope.endsWith('/')) scope += '/';

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    "background_color": "#ffffff",
    "theme_color": "#0460A9",
    "name": "NIBR Open Source Initiative",
    "short_name": "NIBR Open Source",
    "display": "minimal-ui",
    "start_url": req.session.forArtifactory ? `${basepath}/index.html` : basepath,
    scope,
    "icons": [
      {
        "src": resolve(basepath, 'favicon.ico'),
        "sizes": "16x16",
        "type": "image/ico"
      },
      {
        "src": resolve(basepath, 'novartis-290.png'),
        "sizes": "290x290",
        "type": "image/png"
      }
    ]
  }, null, 2
  ));
}