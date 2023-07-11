import { ConnectModalHead, ConnectModalStatus } from '@interchain-ui/react';
import { WalletViewProps } from '@cosmos-kit/core';

import { AstronautSvg } from '../Astronaut';
import { ModalViewImpl, getWalletProp } from './config';

export function ConnectedView({
  onClose,
  onReturn,
  wallet,
}: WalletViewProps): ModalViewImpl {
  const { walletInfo, username, address } = wallet;

  const onDisconnect = async () => {
    await wallet.disconnect(true);
  };

  const modalHead = (
    <ConnectModalHead
      title={walletInfo.prettyName}
      hasBackButton={true}
      onClose={onClose}
      onBack={onReturn}
    />
  );

  const modalContent = (
    <ConnectModalStatus
      wallet={getWalletProp(walletInfo)}
      status="Connected"
      connectedInfo={{
        name: username ?? 'Wallet',
        avatar: (
          <AstronautSvg
            style={{
              fontSize: 'inherit',
              width: '100%',
              height: '100%',
            }}
          />
        ),
        address,
      }}
      onDisconnect={onDisconnect}
    />
  );

  return { head: modalHead, content: modalContent };
}
