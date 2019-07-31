import sirv from 'sirv';
import polka from 'polka';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, BASEPATH = '/' } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(
		BASEPATH,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: () => ({ basepath: BASEPATH })
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});