import { IconBrandTwitter, IconBrandFacebook } from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
  return (
    <div className={'bg-slate-600 grid place-content-center  min-h-screen'}>
      <div className={'flex gap-x-2'}>
        <Button onClick={() => console.log('Hello Register')} type='submit'>
          <IconBrandFacebook />
          Register
        </Button>
        <Button className={'bg-red-400'}>
          <IconBrandTwitter />
          Login
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { className = 'bg-blue-600', children, text, type = 'button' } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 bg-blue-600 text-white px-2 py-2 rounded flex items-center gap-x-2'
      )}
    >
      {text || children}
    </button>
  );
}
