import React from 'react';
import QRCode from 'qrcode.react';

function Qr({ data }) {
  return (
    <div>
      <QRCode value={data} size={264} />
    </div>
  );
}

export default Qr
