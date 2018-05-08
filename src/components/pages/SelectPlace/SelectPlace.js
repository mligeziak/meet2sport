import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';

import AppLayout from '../../ui/AppLayout';

import { placeShape, selectPlaceShape } from './SelectPlace.shapes';

import {
  FormWrapper,
  PageWrapper,
  BottomButton,
  UpperButton,
  PlaceLabel,
} from './SelectPlace.styles';

const SelectPlace = ({
  places,
  initialValues,
  onSubmit,
}) => (
  <AppLayout pageTitle="Wybierz miejsce" activeTab="places" withGoBack>
    <PageWrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({
            values,
            setFieldValue,
            handleSubmit,
          }) => (
            <Form>
              <PlaceLabel>Wybierz:</PlaceLabel>
              <Picker
                name="place"
                selectedValue={values.place}
                onValueChange={(selectedValue) => { setFieldValue('place', selectedValue); }}
                iosHeader="Wybierz"
                mode="dropdown"
              >
                {places.map(place => (
                  <Picker.Item
                    key={place.id}
                    label={`${place.street} ${place.number}, ${place.city}`}
                    value={place.id}
                  />
                ))}
              </Picker>
              <UpperButton
                full
                onPress={() => Actions.home()}
              >
                <Text>Dodaj nowe</Text>
              </UpperButton>
              <BottomButton
                full
                onPress={handleSubmit}
              >
                <Text>Dalej</Text>
              </BottomButton>
            </Form>
          )}
        />
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

SelectPlace.propTypes = {
  places: PropTypes.arrayOf(placeShape).isRequired,
  initialValues: selectPlaceShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SelectPlace;
