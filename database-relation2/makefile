TS_FILES = index.ts
JS_FILES = index.js

all:	$(JS_FILES)

$(JS_FILES): $(TS_FILES)
	@tsc $(TS_FILES)

run:	$(JS_FILES)
	@node $(JS_FILES)

build: all run clean

clean:
	@rm -f $(JS_FILES)
