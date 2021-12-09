import Spinner from 'react-loader-spinner';
import Section from 'components/Section';

function Loader({ color }) {
  return (
    <Section>
      <Spinner type="Oval" height={'50vh'} width={80} color={color} />
    </Section>
  );
}

export default Loader;
