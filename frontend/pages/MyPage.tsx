import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { auth } from '../firebase';

const MyPage: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        router.push('/Signin');
      } else {
        setUser(user);
        console.log('email Verified.');
        console.log(user)
      }
    });
  }, []);
  return (
    <div>
      <h1>マイページ</h1>
      {user?.email}
    </div>
  )
}

export default MyPage;