import Link from "flareact/link";

export async function getEdgeProps() {
  const date = Date();

  return {
    props: {
      date,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function Index({ date }) {
  return (
    <div>
      <h1>
        {date}
      </h1>
      <Link href="/page" prefetch={false}>
        <a>Go to page</a>
      </Link>
    </div>
  );
}
