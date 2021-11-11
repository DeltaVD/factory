/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type {
  BaseRelayRecipient,
  BaseRelayRecipientInterface,
} from '../BaseRelayRecipient'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'forwarder',
        type: 'address',
      },
    ],
    name: 'isTrustedForwarder',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class BaseRelayRecipient__factory {
  static readonly abi = _abi
  static createInterface(): BaseRelayRecipientInterface {
    return new utils.Interface(_abi) as BaseRelayRecipientInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseRelayRecipient {
    return new Contract(address, _abi, signerOrProvider) as BaseRelayRecipient
  }
}
