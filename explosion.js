/*global Packages, require, events, console, utils, this */
'use strict';

// Erik's code, inspired by Andy Hunt's LavaVision,
// https://github.com/andyhunt/minecraft-canarymod-plugins/blob/master/code/LavaVision/src/lavavision/LavaVision.java
// Examples: https://github.com/walterhiggins/ScriptCraft
var cm = Packages.net.canarymod,
    cmBlockIterator = cm.BlockIterator,
    cmLineTracer = cm.LineTracer,
    cmParticle = cm.api.world.effects.Particle,
    cmParticleType = cm.api.world.effects.Particle.Type,
    items = require('items'),
	utils = require('utils');

events.itemUse(function (event) {
    var block,
        EXPLOSIVE_YIELD = 10,
        lineTracer,
        loc,
        particle,
        sightItr,
        theplayer = event.player,
        itemheld = theplayer.itemHeld,

//  console.log(itemheld);
    if (itemheld && items.slimeBall(itemheld.type)) {
        loc = utils.getMousePos(theplayer.name);
        theplayer.world.makeExplosion(theplayer, loc, EXPLOSIVE_YIELD, true);
        particle = new cmParticle(this.x, this.y, this.z, cmParticleType.LAVA);
        lineTracer = new cmLineTracer(theplayer);
        sightItr = new cmBlockIterator(lineTracer, true);
        while (sightItr.hasNext()) {
            block = sightItr.next();
            loc = block.getLocation();
 //         console.log(loc);
            particle = new cmParticle(loc.x, loc.y, loc.z, cmParticleType.EXPLOSION_LARGE);
            theplayer.world.spawnParticle(particle);
        }
    }
}); // events.itemUse
