import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import LinkCV from "../islands/button_link_cv.tsx";

export default define.page(function Home() {

  return (
    <div class="px-4 py-8 mx-auto bg_white min-h-screen">
      <Head>
        <title>Thomas Leroy</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">À propos de moi</h1>
        <p class="my-4">
          Bienvenue sur mon portfolio.
        </p>
        <LinkCV />
      </div>
    </div>
  );
});