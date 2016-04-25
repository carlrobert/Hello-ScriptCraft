function halvcirkel(matrial, radie, hojd, left)
{
  var arcParams = {
    radius: radie,
    fill: true,
    orientation: 'horizontal',
    stack: hojd,
    quadrants: left ? { topleft: true, bottomleft: true } : { topright: true, bottomright: true }
  };
  var md = this.getBlockIdAndMeta(matrial);
  arcParams.blockType = md[0];
  arcParams.meta = md[1];

  return this
    .left(radie)
    .arc(arcParams)
    .right(radie)
    ;
}
Drone.extend('halvcirkel', halvcirkel);

function cirkel(matrial, radie, hojd){ 
  return this
    .left(radie)
    .cylinder(matrial, radie, hojd)
    .right(radie)
    ;
}
Drone.extend('cirkel', cirkel);

function yinyang(matrial1, matrial2, radie, hojd)
{
  return this
    .halvcirkel(matrial1, radie, hojd, true)
    .halvcirkel(matrial2, radie, hojd, false)
    .cirkel(matrial2, radie / 2, hojd)
    .fwd(radie)
    .cirkel(matrial1, radie / 2, hojd)
    .back(radie)
    .fwd(radie / 2)
    .box(matrial1, 1, hojd, 1)
    .fwd(radie )
    .box(matrial2, 1, hojd, 1)
    .back(radie * 3 / 4)
    ;
}
Drone.extend('yinyang', yinyang);
