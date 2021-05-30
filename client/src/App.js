import { useEffect } from 'react';
import Group from './components/Pages/Group';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  const media = useMediaQuery('(min-width:1000px)');
  useEffect(() => {
    console.log(media);
  }, [media]);
  return (
    <>
      <div id="page">
        <Group />
      </div>
    </>
  );
}

export default App;
