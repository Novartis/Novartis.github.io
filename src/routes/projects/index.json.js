import projects from './_projects.js';

const contents = JSON.stringify(projects);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}