import fs from 'fs';
import path from 'path';
import marked from 'marked';
import frontmatter from 'frontmatter';

const PROJECTS_DIR = path.resolve(process.cwd(), './projects');
const EXTENSIONS = ['.md', '.html'];

function getPostFilenameFromSlug(slug) {
	return EXTENSIONS.map((ext) => 
		path.join(PROJECTS_DIR, `${slug}${ext}`)
	).find((candidateFilename) => 
		fs.existsSync(candidateFilename)
	) || null;
}

export function getAllPostSlugs() {
	const slugs = fs.readdirSync(PROJECTS_DIR)
		.filter(file => EXTENSIONS.includes(path.extname(file)))
		.map(file => path.basename(file, path.extname(file)));

	return slugs.map(getPost).sort((a, b) => {
		return a.metadata.launched < b.metadata.launched ? 1 : -1;
	});
}

export function getPost(slug) {
	const file = getPostFilenameFromSlug(slug);
	if (!file) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = process_markdown(markdown);

	const date = new Date(`${metadata.launched} EDT`); // cheeky hack
	metadata.dateString = date.toDateString();
	metadata.title = metadata.name;

	const html = marked(content);

	return {
		slug,
		metadata: {
			...metadata,
			description: marked(metadata.description)
		},
		html
	};
}

function process_markdown(rawFile) {
	const { data: metadata, content } = frontmatter(rawFile);

	return { metadata, content };
}

export default getAllPostSlugs();