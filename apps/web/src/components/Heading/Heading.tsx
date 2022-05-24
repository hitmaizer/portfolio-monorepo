import * as S from './Heading.styles';
import { HeadingProps } from './Heading.types';

const Heading = ({ children, oxygen, ...rest }: HeadingProps) => {
  return (
    <S.Heading {...rest} oxygen={oxygen}>
      {children}
    </S.Heading>
  );
};

Heading.defaultProps = {
  size: '4xl',
  as: 'h1',
  children: 'All of your favorite extreme sports movies in a single place!',
  fontWeight: 'black',
};

export default Heading;
