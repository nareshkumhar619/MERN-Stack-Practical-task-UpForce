import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleUSerCard from '../components/SingleUserCard';
import { Spinner } from '@chakra-ui/react';

const SingleView = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getSingleData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://upforce-backend.onrender.com/api/user/${id}`);
      const res = await response.json();
      if (response.ok) {
        setData(res.data);
        setLoading(false);
      } else {
        console.log('Failed to fetch users');
      }
    } catch (error) {
      console.log('Error:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleData();
  }, [id]);

  return loading ? <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl' /> : (
    <div>
      {<SingleUSerCard data={data} />}
    </div>
  )
}

export default SingleView