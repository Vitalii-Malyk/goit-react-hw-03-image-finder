import { Oval } from 'react-loader-spinner';
import { LoaderStyle } from 'components/Loader/Loader.styled';

export default function Loader() {
  return (
    <LoaderStyle className="loader">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </LoaderStyle>
  );
}
