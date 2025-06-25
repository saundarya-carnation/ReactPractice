import JSXDemo from './JSXDemo';
import PropsDemo from './PropsDemo';
import StateDemo from './StateDemo';
import EffectDemo from './EffectDemo';
import RouterDemo from './RouterDemo';
import MapDemo from './MapDemo';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>React Fundamentals (Simple)</h1>
      <JSXDemo />
      <PropsDemo name="xyzS" />
      <StateDemo />
      <EffectDemo />
      <RouterDemo />
      <MapDemo />

    </div>
  );
}

export default App;

