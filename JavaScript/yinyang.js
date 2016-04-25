function halvcirkel(material, radie, hojd, left)
{
  var arcParams = {
    radius: radie,
    fill: true,
    orientation: 'horizontal',
    stack: hojd,
    quadrants: left ? { topleft: true, bottomleft: true } : { topright: true, bottomright: true }
  };
  var md = this.getBlockIdAndMeta(material);
  arcParams.blockType = md[0];
  arcParams.meta = md[1];

  return this
    .left(radie)
    .arc(arcParams)
    .right(radie)
    ;
}
Drone.extend('halvcirkel', halvcirkel);

function cirkel(material, radie, hojd){ 
  return this
    .left(radie)
    .cylinder(material, radie, hojd)
    .right(radie)
    ;
}
Drone.extend('cirkel', cirkel);

function yinyang(material1, material2, radie, hojd)
{
  return this
    .halvcirkel(material1, radie, hojd, true)
    .halvcirkel(material2, radie, hojd, false)
    .cirkel(material2, radie / 2, hojd)
    .fwd(radie)
    .cirkel(material1, radie / 2, hojd)
    .back(radie)
    .fwd(radie / 2)
    .box(material1, 1, hojd, 1)
    .fwd(radie )
    .box(material2, 1, hojd, 1)
    .back(radie * 3 / 4)
    ;
}
Drone.extend('yinyang', yinyang);
