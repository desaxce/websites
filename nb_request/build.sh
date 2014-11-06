#!/bin/sh

#Create the tiles of images
for i in $(seq 1 5);
do
convert leopard.jpg -crop `python -c "print 100.0/$i"`%x0 $i-%d.jpg;
done

# Create the html files
for i in $(seq 1 5);
do
sed "s/?/$i/g" x_request.html > $i.html;
done

