.PHONY: clean

all: tiles

%: %.jpg
	convert -crop 10x10@ $^ tile_$@_%d.jpg

clean:
	rm -rf tile_*
