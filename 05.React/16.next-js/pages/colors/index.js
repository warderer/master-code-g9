import Head from 'next/head'; //Me permite usar metadatos y ser indexable por buscadores
import axios from 'axios';
import Link from 'next/link'; //Me permite manejar enlaces en Next JS

// API: https://reqres.in

// getStaticProps() es propio de Next JS
// Hace la llamada a API de lado del servidor, la procesa y
// entrega el resultado como PROP al componente para que este lo use.
export async function getStaticProps(){
    const response = await axios.get('https://reqres.in/api/unknown')
        .catch(err => console.log(err));

    const { data } = response;

    //getStaticProps necesita que le pase la data como Prop
    return {
        props: {
            colors: data //prop con la data
        }
    }
}

const colors = (props) => {
    return (
        <div>
            <Head>
                <title>All the Colors</title>
            </Head>
            <h2>The Colors</h2>
            {props.colors.data.map( element => <li key={element.id}><Link href={`/colors/${element.id}`}>{element.name}</Link></li> )}
        </div>
    )
}

export default colors;
