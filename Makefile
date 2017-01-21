install:
	npm install

start:
	npm run babel-node -- "src/bin/brain-games.js"

starteven:
	npm run babel-node -- "src/bin/brain-even.js"

startcalc:
	npm run babel-node -- "src/bin/brain-calc.js"

startgcd:
	npm run babel-node -- "src/bin/brain-gcd.js"

startbalance:
		npm run babel-node -- "src/bin/brain-balance.js"

startprogression:
		npm run babel-node -- "src/bin/brain-progression.js"

startprime:
		npm run babel-node -- "src/bin/brain-prime.js"

publish:
	npm publish

lint:
	npm run eslint -- src bin

install-deps:
	yarn
