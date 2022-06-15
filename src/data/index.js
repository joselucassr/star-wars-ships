import falcon from '../imgs/falcon/falcon.png';
import xwing from '../imgs/xwing/xwing.png';
import ywing from '../imgs/ywing/ywing.png';
import t47 from '../imgs/t47/t47.png';
import starDestroyer from '../imgs/starDestroyer/starDestroyer.png';

const data = [
  {
    id: 'falcon',
    name: 'Millennium Falcon',
    description:
      'The Millennium Falcon, originally designated YT 492727ZED and formerly known as the Stellar Envoy, was a Corellian YT-1300 light freighter most famously used by the smugglers Han Solo and Chewbacca, during and following the Galactic Civil War.',
    image: falcon,
  },
  {
    id: 'xwing',
    name: 'T-65 X-wing starfighter',
    description:
      'The Incom T-65 X-wing starfighter was the primary all-purpose starfighter of the Rebel Alliance and its successor governments. Known for its versatility and exceptional combat performance, it was a favorite with Rebel and New Republic pilots. Possessing deflector shields, a hyperdrive, an R2 astromech for repairs and navigation, and a complement of proton torpedoes, the X-wing allowed the Rebellion to launch raids in Imperial space with improved odds of a successful mission.',
    image: xwing,
  },
  {
    id: 'ywing',
    name: 'BTL Y-wing starfighter',
    description:
      'The BTL Y-wing starfighter, also known to as the Y-wing starfighter/bomber or more simply as the BTL-series, Y-wing fighter, or Y-wing and nicknamed the wallowing pigs, was a series of multi-role starfighter-bombers manufactured by Koensayr Manufacturing. Commissioned by the Galactic Republic during the Clone Wars, many surviving Y-wings would go on to serve with the Alliance to Restore the Republic during the Galactic Civil War. Notable models included the original two-seat BTL-B Y-wing starfighter/bomber; its successor, the BTL-S3 Y-wing Starfighter, and the single-seat BTL-A4 Y-wing assault starfighter/bomber.',
    image: ywing,
  },
  {
    id: 't47',
    name: 'T-47 airspeeder',
    description:
      'The Incom Corporation T-47 airspeeder was an airspeeder that became famous during the Galactic Civil War for its use by the Alliance to Restore the Republic as a military fighter known as the snowspeeder.',
    image: t47,
  },
  {
    id: 'starDestroyer',
    name: 'Imperial-class Star Destroyer',
    description:
      'The Imperial-class Star Destroyer, also known generally as the Imperial Star Destroyer, was a type of Star Destroyer widely used by the Galactic Empire and the Imperial Remnant. There were two sub-classes of the line: the Imperial I-class Star Destroyer (also known as Imperator-class), and the Imperial II-class Star Destroyer.',
    image: starDestroyer,
  },
];

export default data;
