echo "var jsonCarData = '`cat data.json`'; " > js/data.js && echo "var jsonCarData = '`cat ua/data.json`'; " > ua/js/data.js && git add . && git commit -m "` date `" && git push origin master
