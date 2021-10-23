import { useState, useEffect, useMemo } from './FakeReact.js'

export default function Component({ propCount, buttonElem }) {
  const [count, setCount] = useState(0);
  const propCountDoubled = useMemo(() => {
    console.log('sup memo');
    return propCount * 2;
  }, [propCount]);

  useEffect(() => {
    const handler = () => setCount(currentCount => currentCount + 1);
    buttonElem.addEventListener('click', handler);
    return () => buttonElem.removeEventListener('click', handler);
  }, [buttonElem]);

  return `
    State: ${count}
    Prop: ${propCount}
    Prop X2: ${propCountDoubled}
  `;
}