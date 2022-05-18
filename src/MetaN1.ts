import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts'
import {
	OpenTimeUpdated,
	BaseURIUpdated,
	SupplyUpdated,
	RemainsUpdated,
	Transfer,
	WhiteListUpdated
} from './types/MetaN1/MetaN1'

import {
	Param,
	Token,
	WhiteList
} from './types/schema'
import { contract } from './utils'

const paramId = '1'

export function handleWhiteListUpdated(event: WhiteListUpdated): void {
	const to = event.params.to
	let entity = WhiteList.load(to.toHex())
	if (!entity) {
		entity = new WhiteList(to.toHex())
	}
	entity.address = to
	entity.isWhite = event.params.isWhite
	entity.save()
}

export function handleOpenTimeUpdated(event: OpenTimeUpdated): void {
	let param = Param.load(paramId)
	if (!param) {
		param = new Param(paramId)
	}
	param.openTime = event.params.time
	param.save()
}

export function handleBaseURIUpdated(event: BaseURIUpdated): void {
	let param = Param.load(paramId)
	if (!param) {
		param = new Param(paramId)
	}
	param.baseURI = event.params.uri
	param.save()
}

export function handleSupplyUpdated(event: SupplyUpdated): void {
	let param = Param.load(paramId)
	if (!param) {
		param = new Param(paramId)
	}
	param.supply = event.params.supply
	param.save()
}

export function handleRemainsUpdated(event: RemainsUpdated): void {
	let param = Param.load(paramId)
	if (!param) {
		param = new Param(paramId)
	}
	param.remains = event.params.remains
	param.save()
}

export function handleTransfer(event: Transfer): void {
	const from = event.params.from
	const id = event.params.tokenId
	if (from.equals(Address.zero())) {
		const token = new Token(id.toHex())
		const owner = contract.ownerOf(id)
		const uri = contract.tokenURI(id)
		token.tokenId = id
		token.owner = owner
		token.uri = uri
		token.txHash = event.transaction.hash
		token.timestamp = event.block.timestamp
		token.save()
	}
}
