```javascript
import { useRouter } from 'next/router';
import Link from 'next/link';

function MyComponent() {
  const router = useRouter();

  const handleAboutClick = (e) => {
    e.preventDefault();
    router.push('/about');
  };

  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
       <a href="/about" onClick={handleAboutClick}>About Us 2</a>
    </div>
  );
}

export default MyComponent; 
```