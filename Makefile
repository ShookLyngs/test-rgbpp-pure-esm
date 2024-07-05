test:
	make test-cjs
	make test-esm

test-cjs:
	node cjs/service.cjs
	node cjs/btc.cjs
	node cjs/ckb.cjs

test-esm:
	node esm/service.mjs
	node esm/btc.mjs
	node esm/ckb.mjs
