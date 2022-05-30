import { Address } from '@graphprotocol/graph-ts'
import { MetaN1 } from './types/MetaN1/MetaN1'

export const contract = MetaN1.bind(Address.fromString('0x2730Ab0B97dBB941d0B633385BC88A6BfA39D0E4'))