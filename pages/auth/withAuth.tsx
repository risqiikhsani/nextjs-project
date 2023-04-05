import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ComponentType } from 'react';

function withAuth<T extends object>(WrappedComponent: ComponentType<T>) {
  function Wrapper(props: T) {
    const router = useRouter();

    useEffect(() => {
      checkAuth();
    }, []);

    function checkAuth() {
      // check if user is authenticated here
      const isAuthenticated = false; // replace with your authentication check
        
      // if user is not authenticated, redirect to login page
      if (!isAuthenticated) {
        router.push(`/auth/login?next=${router.asPath}`);
      }
      if (isAuthenticated && (router.pathname === '/auth/login' || router.pathname === '/auth/register')){
        router.push('/');
      }
    }

    return <WrappedComponent {...props} />;
  }

  Wrapper.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent'})`;

  return Wrapper;
}

export default withAuth;