import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between p-5'>
      <Link href='/'>
        <div>
          <h1 className='text-2xl'>FlightBoard</h1>
        </div>
      </Link>
      <div className='flex items-center gap-2'>
        <Link href='/auth/sign-in'>
          <span className='border p-2'>Sign In</span>
        </Link>
        <Link href='/auth/sign-up'>
          <span className='border p-2'>Sign Up</span>
        </Link>
      </div>
    </div>
  );
}
