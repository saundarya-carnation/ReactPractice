import JSXDemo from './JSXDemo';
import PropsDemo from './PropsDemo';
import StateDemo from './StateDemo';
import EffectDemo from './EffectDemo';
import RouterDemo from './RouterDemo';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>React Fundamentals (Simple)</h1>
      <JSXDemo />
      <PropsDemo name="xyzS" />
      <StateDemo />
      <EffectDemo />
      <RouterDemo />
    </div>
  );
}

export default App;

