import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ProductDetailPage({ product }) {

  const router = useRouter();

  if (router.isFallback)
    return <h1>Loading...</h1>

  return (
    <>
      <h1>This is {product.ProductName}</h1>
      
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </>
  )
}

export async function getStaticPaths() {
  // call api to get list of blog
  const products = await axios.get("https://services.odata.org/Northwind/Northwind.svc/Products?$format=json");

  const pages = products.data.value.map(product => (
    { params: { slug: String(product.ProductID) } }
  ));

  return { paths: pages, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = await axios.get(`https://services.odata.org/Northwind/Northwind.svc/Products(${params.slug})?$format=json`);

  return {props: { product: product.data }};
}