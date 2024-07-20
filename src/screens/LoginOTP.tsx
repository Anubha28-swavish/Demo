import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import CustomInput from '../components/CustomInput/CustomInput';

const LoginOTP = () => {
  const {values, handleChange, errors, handleBlur, touched, handleSubmit} =
    useFormik({
      initialValues: {
        merchantname: '',
        legalname: '',
        merchanttradingname: '',
        email: '',
        password: '',
        phoneNumber: '',
      },
      validationSchema: Yup.object({
        legalname: Yup.string().required('Legal Name is required'),
        merchantname: Yup.string().required('Merchant Name is required'),
        merchanttradingname: Yup.string().required(
          'Merchant Trading Name is required',
        ),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        phoneNumber: Yup.string()
          .matches(/^[0-9]+$/, 'Phone number is not valid')
          .min(10, 'Phone number must be at least 10 digits')
          .required('Phone number is required'),
      }),
      onSubmit: values => {
        console.log(values);
      },
    });

  return (
    <View style={styles.container}>
      <CustomInput
        name="merchantname"
        label=" Merchant Name "
        marginBottom={15}
        containerStyle={styles.customContainer}
        inputStyle={styles.customInput}
        value={values.merchantname}
        onChangeText={handleChange('merchantname')}
        placeholder="Enter Merchant Name"
        touched={touched}
        errors={errors}
      />

      <CustomInput
        name="legalname"
        label=" Legal Name "
        marginBottom={15}
        containerStyle={styles.customContainer}
        inputStyle={styles.customInput}
        value={values.legalname}
        onChangeText={handleChange('legalname')}
        placeholder="Enter Legal Name"
        touched={touched}
        errors={errors}
      />

      <CustomInput
        name="merchanttradingname"
        label=" Merchant Trading Name "
        marginBottom={15}
        containerStyle={styles.customContainer}
        inputStyle={styles.customInput}
        value={values.merchanttradingname}
        onChangeText={handleChange('merchanttradingname')}
        placeholder="Enter Merchant Trading Name"
        touched={touched}
        errors={errors}
      />

      <CustomInput
        name="phoneNumber"
        label=" Mobile Number"
        marginBottom={15}
        containerStyle={styles.customContainer}
        inputStyle={styles.customInput}
        value={values.phoneNumber}
        onChangeText={handleChange('phoneNumber')}
        placeholder="Enter Mobile Number"
        touched={touched}
        errors={errors}
      />
      <CustomInput
        name="email"
        label="Email "
        marginBottom={15}
        containerStyle={styles.customContainer}
        inputStyle={styles.customInput}
        value={values.email}
        onChangeText={handleChange('email')}
        touched={touched}
        errors={errors}
      />
      

      {/* <CustomInput
                label='Password '
                marginBottom={15}
                containerStyle={styles.customContainer}
                inputStyle={styles.customInput}
                value={.values.password}
                onChangeText={.handleChange('password')}
            />
            {.touched.password && .errors.password ? (
                <Text style={styles.error}>{.errors.password}</Text>
            ) : null} */}

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  error: {
    color: 'red',
  },
  customContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  customInput: {
    borderColor: '#DCDCDC',
    borderWidth: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  scrollContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 20,
  },
});

export default LoginOTP;
