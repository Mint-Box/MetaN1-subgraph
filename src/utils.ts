import { Address } from '@graphprotocol/graph-ts'
import { MetaN1 } from './types/MetaN1/MetaN1'

export const contract = MetaN1.bind(Address.fromString('0xCA668423376Ee23ED40746275A79f626b24e9DAF'))