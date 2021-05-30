import { useEffect } from 'react';
import Group from './components/Pages/Group';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation';

function App() {
  const media = useMediaQuery('(min-width:1000px)');
  useEffect(() => {
    console.log(media);
  }, [media]);
  return (
    <>
      <Navigation />
      <div id="page">
        <CssBaseline />
        <Group />
      </div>
    </>
  );
}

export default App;
