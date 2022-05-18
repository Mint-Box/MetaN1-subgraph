import { Address } from '@graphprotocol/graph-ts'
import { MetaN1 } from './types/MetaN1/MetaN1'

export const contract = MetaN1.bind(Address.fromString('0x2507d76A58c7be37E9dbBBAb067673203ED62318'))