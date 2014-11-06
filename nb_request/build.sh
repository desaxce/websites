#!/bin/sh
set -o verbose

#Create the tiles of images
for i in $(seq 1 100);
do
convert leopard.jpg -crop `python -c "print 100.0/$i"`%x0 $i-%d.jpg;
done

# Create the html files
for i in $(seq 1 100);
do
sed "s/?/$i/g" x_request.html > $i.html;
done

