import MuiPhoneNumber from 'material-ui-phone-number-2';
import React, { useState } from 'react';

export default function CountriesNumbers({ defaultCountry = 'us', label = 'Phone Number', placeholder = 'Enter phone number', onChange }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      <MuiPhoneNumber
        defaultCountry={defaultCountry}
        label={label}
        placeholder={placeholder}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>
  );
}
