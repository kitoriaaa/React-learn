import Layout from '../components/layout';
import useSWR from 'swr';


export default function Home() {
  const fetcher = url => fetch(url).then(res => res.text());

  const { data } = useSWR('http://localhost:8080/theme/current/', fetcher);
  console.log(data);

  return (
    <dvi>
      <Layout header="Go api test" title="Go API test">
        <div className="alert alert-primary text-center">
          {data}
        </div>
      </Layout>
    </dvi>
  )
}
