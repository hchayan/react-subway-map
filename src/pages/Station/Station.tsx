import { useEffect } from 'react';

import ContentContainer from '../../components/@commons/ContentContainer/ContentContainer';
import AddStationForm from '../../components/StationPage/AddStationForm';
import StationListItem from '../../components/StationPage/StationListItem';
import useStation from '../../hook/useStation';

import * as S from './Station.styles';

const Station = () => {
  const { stations, error, resetError } = useStation();

  useEffect(() => {
    if (error) {
      window.alert(error);
      resetError();
    }
  }, [error, resetError]);

  return (
    <S.Container>
      <ContentContainer hasHat={true}>
        <AddStationForm />
      </ContentContainer>
      <ContentContainer>
        <S.StationList>
          {stations.map(({ id, name }) => (
            <StationListItem key={id} name={name} id={id} />
          ))}
        </S.StationList>
      </ContentContainer>
    </S.Container>
  );
};

export default Station;
