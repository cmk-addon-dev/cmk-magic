// 飛翔物
declare const enum ProjectileEntity {
    //% block="矢" jres=Item.Arrow
    Arrow
}

// projectile => entity id
function getIdOfProjectile(projectile: ProjectileEntity): number {
    switch (projectile) {
        case ProjectileEntity.Arrow: return ProjectileMob.Arrow;
        default: throw `Unrecognized ProjectileEntity enum value: ${projectile}`
    }
}

// パーティクル
declare const enum MagicParticle {
    //% block="あか" jres=Icon.FlameRed
    FlameRed,
    //% block="みどり" jres=Icon.FlameGreen
    FlameGreen,
    //% block="あお" jres=Icon.FlameBlue
    FlameBlue,
    //% block="むらさき" jres=Icon.FlameMagenta
    FlameMagenta,
    //% block="きいろ" jres=Icon.FlameYellow
    FlameYellow,
}

// particle => particle args
function getParticleArgs(particle: MagicParticle): string {
    switch (particle) {
        case MagicParticle.FlameRed: return "cmk:mobflame 2 1 0 0";
        case MagicParticle.FlameGreen: return "cmk:mobflame 2 0 1 0";
        case MagicParticle.FlameBlue: return "cmk:mobflame 2 0 0 1";
        case MagicParticle.FlameMagenta: return "cmk:mobflame 2 1 0 1";
        case MagicParticle.FlameYellow: return "cmk:mobflame 2 1 1 0";
        default: throw `Unrecognized MagicParticle enum value: ${particle}`
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#bce2e8 icon="\uf06d" block="まほう"
namespace cmkMagic {
    //% block="%projectile に まほう %particle をつける"
    //% inlineInputMode=inline
    //% projectile.defl=ProjectileEntity.Arrow
    //% particle.defl=MagicParticle.FlameRed
    export function addMagicParticle(
        projectile: ProjectileEntity, particle: MagicParticle) {

        player.execute(
            `/scriptevent cmk:particle_arrow ${getParticleArgs(particle)}`
        )
    }
}