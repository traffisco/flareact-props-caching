export async function getEdgeProps() {
  const date = Date();

  return {
    props: {
      date,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function Page({ date }) {
  return (
      <h1>
        Page2 {date}
      </h1>
  );
}