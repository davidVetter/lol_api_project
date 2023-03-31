import { resolve } from 'node:path';
import DRAGON_TAIL_VERSION from '../../../../src/globalVariables/globalVariables';
export default function getChampionImgFilePath(champName, imgType, skinID) {
    return resolve(`../../../../assets/dragontail-${DRAGON_TAIL_VERSION}/img/champion/${imgType}/${champName}_${skinID}.jpg`);
}