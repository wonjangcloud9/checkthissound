import styles from "../styles/Home.module.css";
import useSWR, { mutate } from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR(
    "https://dogs-api.nomadcoders.workers.dev",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <video src={data.url} controls autoPlay loop />
      <button
        onClick={() =>
          mutate(
            "https://dogs-api.nomadcoders.workers.dev",
            { ...data, isLiked: true },
            false
          )
        }
      >
        Like
      </button>
      <button
        onClick={() => mutate("https://dogs-api.nomadcoders.workers.dev")}
      >
        Load New Dog
      </button>
    </div>
  );
}
