export default function Home(props) {}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    }
  }
}