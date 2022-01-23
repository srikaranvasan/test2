import React, {useState} from "react";
import QrScan from 'react-qr-reader';

const Scan = () => {
    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }
    return(
        <div className="scan">
        <QrScan
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '50%' }}
    />
    <br></br>
        <textarea value={qrscan} readOnly/>
    </div>
    )
}
export default Scan;