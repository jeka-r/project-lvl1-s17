install:
	npm install

start:
	npm run babel-node -- "src/bin/brain-games.js"

starteven:
	npm run babel-node -- "src/bin/brain-even.js"

startcalc:
		npm run babel-node -- "src/bin/brain-calc.js"

publish:
	npm publish

lint:
	npm run eslint -- src bin
