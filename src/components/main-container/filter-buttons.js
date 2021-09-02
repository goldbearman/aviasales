import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function FilterButtons() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'САМЫЙ ДЕШОВЫЙ', value: '1' },
    { name: 'САМЫЙ БЫСТРЫЙ', value: '2' },
    { name: 'ОПТИМАЛЬНЫЙ', value: '3' },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default FilterButtons;