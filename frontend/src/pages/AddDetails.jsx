import React, { useRef, useState } from 'react';
import axios from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"
import UseToast from '../customHook/UseToast';
import '../styles/AddDetails.css';

const AddDetails = () => {

const navigate = useNavigate()     

  const [url, setUrl] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();
  const toastMsg = UseToast();

  const handleUserFormWithCloudinary = async () => {
    const img = imageRef.current.files[0];
    const data = new FormData();
    data.append('file', img);
    data.append('upload_preset', 'upforce');
    data.append('cloud_name', 'narucloud');
    axios
      .post('https://api.cloudinary.com/v1_1/narucloud/image/upload', data)
      .then((res) => {
        setUrl(res.data.secure_url);
      })
      .catch((err) => console.log(err));

    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      gender: gender,
      status: status,
      location: location,
      profile: url,
    };

    setLoading(true);
    setTimeout(() => {
      axios
        .post(`https://upforce-backend.onrender.com/api/user`, obj)
        .then((res) => {
          console.log(res);
          setLoading(false);
          toastMsg({
            title: 'Data updated successfully',
            status: 'success',
          });
          setFirstName('');
          setLastName('');
          setEmail('');
          setMobile('');
          setGender('');
          setStatus('');
          setLocation('');
          setUrl('');
          navigate('/')
        })
        .catch((error) => {
          setLoading(false);
          toastMsg({
            title: `${error.response.data.msg}`,
            status: 'error',
          });
        });
    }, 2000);
  };

  return (
    <div>
      <div className='inputContainer'>
      <div className='container'>
      <div className='image-container'>
      <img
                src='https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png'
                alt='profile'
                className='profile-photo'
              />
    </div>
        </div>
        <div className='box-container'>
        <Box
          w={{ base: '100%', md: '48%' }}
          rounded='lg'
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
          id='child1'
        >
          <Stack spacing={4}>
            <label htmlFor='fileInput'>
             
              <input
                type='file'
                id='fileInput'
                style={{ display: 'none' }}
                ref={imageRef}
              />
            </label>
            <FormControl id='First Name'>
              <FormLabel>First Name</FormLabel>
              <Input
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Select your Gender</FormLabel>
              <Select
                placeholder='Select your gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </Select>
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Image</FormLabel>
              <Input
                type='file'
                placeholder='Choose profile..'
                ref={imageRef}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box
          w={{ base: '100%', md: '48%' }}
          rounded='lg'
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
          className='child2'
        >
          <Stack spacing={4}>
            <FormControl id='First Name'>
              <FormLabel>Last Name</FormLabel>
              <Input
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl id='mobile'>
              <FormLabel>Mobile</FormLabel>
              <Input
                type='text'
                placeholder='Mobile'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </FormControl>
            <FormControl id='status'>
              <FormLabel>Select your Status</FormLabel>
              <Select
                placeholder='Status...'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value='active'>Active</option>
                <option value='inactive'>InActive</option>
              </Select>
            </FormControl>
            <FormControl id='location'>
              <FormLabel>Enter your Location</FormLabel>
              <Input
                type='text'
                placeholder='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormControl>
          </Stack>
        </Box>
        </div>
        <div className='btn'>
        {loading ? (
          <Button
            isLoading
            loadingText='Submitting'
            colorScheme='blue'
            variant='outline'
          >
            Submit
          </Button>
        ) : (
          <Button onClick={handleUserFormWithCloudinary}>Submit</Button>
        )}
      </div>
      </div>

      
    </div>
  );
};

export default AddDetails;
