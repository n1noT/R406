import Image from "next/image";
import styles from "./page.module.css";
import Board from "./ttt/square.js";

export default function Home() {
  return (
    <main>
      <Board></Board>
    </main>
  );
}
