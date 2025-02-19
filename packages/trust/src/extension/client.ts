import { Algo } from '@cosmjs/proto-signing';
import { WalletClient } from '@cosmos-kit/core';

import { Trust } from './types';

export class TrustClient implements WalletClient {
  readonly client: Trust;

  constructor(client: Trust) {
    this.client = client;
  }

  async enable(chainIds: string | string[]) {
    await this.client.enable(chainIds);
  }

  async getAccount(chainId: string) {
    const key = await this.client.getKey(chainId);
    return {
      name: key.name,
      address: key.bech32Address,
      algo: key.algo as Algo,
      pubkey: key.pubKey,
    };
  }

  getOfflineSigner(chainId: string) {
    return this.client.getOfflineSigner(chainId);
  }
}
