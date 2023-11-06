import React, { forwardRef } from 'react';
import QRCode from 'qrcode.react';

const Qr = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref}>
      <QRCode value={data} size={264} />
    </div>
  );
});

export default Qr;
