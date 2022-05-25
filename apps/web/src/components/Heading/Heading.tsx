import * as S from './Heading.styles';
import { HeadingProps } from './Heading.types';

const Heading = ({ children, oxygen, subtitle, ...rest }: HeadingProps) => {
  return (
    <S.Heading {...rest} oxygen={oxygen} subtitle={subtitle}>
      {children}
    </S.Heading>
  );
};

Heading.defaultProps = {
  as: 'h1',
  children: 'All of your favorite extreme sports movies in a single place!',
  fontWeight: 'black',
};

export default Heading;
