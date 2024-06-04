const sharp = require('sharp');

sharp('logoNode.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')