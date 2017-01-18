install:
	npm install --save-dev babel-cli
	npm install --save-dev babel-core
	npm install --save-dev babel-preset-env
	npm install --save-dev babel-preset-stage-0

start:
	npm run babel-node -- "src/bin/brain-games.js"

publish:
	npm publish
