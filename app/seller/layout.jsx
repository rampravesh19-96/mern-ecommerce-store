'use client'

import { useAppContext } from '@/context/AppContext';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/seller/Navbar';
import Sidebar from '@/components/seller/Sidebar';
import { useRouter } from 'next/navigation'; // ✅ Correct for client-side redirect

const Layout = ({ children }) => {
  const { user, getToken } = useAppContext();
  const router = useRouter();
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const verifyRole = async () => {
      const token = await getToken();
      const isAdminUser = await checkIsAdmin(token);
      if (!isAdminUser) {
        router.push('/not-authorized');
      }
      setTimeout(()=>{
        setLoading(false)
      },1000)
    };

    if (user) {
      verifyRole();
    }
  }, [user]);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

// ✅ helper function to check if user is admin
const checkIsAdmin = async (token) => {
  try {
    const res = await fetch('/api/user/data', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data?.user?.role === 'admin';
  } catch (err) {
    console.error('Error checking role:', err);
    return false;
  }
};
