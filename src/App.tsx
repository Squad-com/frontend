import { Suspense } from 'react';
import Main from './Layouts/Main';
import Routes from './Routes';

function App() {
  return (
    <Main>
      <Suspense fallback={<div />}>
        <Routes />
      </Suspense>
    </Main>
  );
}

export default App;
