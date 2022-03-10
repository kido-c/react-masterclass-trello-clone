import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { minutesState } from './atoms';

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        onChange={onMinutesChange}
        value={minutes}
        type="number"
        placeholder="minutes"
      />
      <input type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
