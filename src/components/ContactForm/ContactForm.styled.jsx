import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  margin: 0 auto ${p => p.theme.spacing(10)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
`;

export const LabelWrap = styled.span`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  font-size: 18;
`;

export const Field = styled(FormikField)`
  border-radius: ${p => p.theme.radii.md};
  border: 1px solid ${p => p.theme.colors.blue};
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
`;

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  width: ${p => p.theme.spacing(40)};
  height: ${p => p.theme.spacing(10)};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  border: none;
  border-radius: ${p => p.theme.radii.md};
  transition: all 300ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.lightblue};
    color: ${p => p.theme.colors.blue};
    font-weight: 700;
    box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
    -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
    -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  }
`;
