import styled from 'styled-components';
import { View, Text } from 'native-base';
import { MapView } from 'expo';

const PageWrapper = styled(View)``;

const MapWrapper = styled(View)`
  height: 185px;
`;

const MapEvent = styled(MapView)`
  height: 100%;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;

export {
  PageWrapper,
  MapEvent,
  MapWrapper,
  TextBold,
};
