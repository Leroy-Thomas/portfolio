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
      {/* Block 1: Contact */}
      <div class="flex flex-col items-center justify-center p-8 bg-white text-gray-900">
        <h2 class="text-3xl font-bold mb-4">Projets Professionnels</h2>
        <p>TODO</p>
      </div>

      {/* Block 2: Projets */}
      <div class="flex flex-col items-center justify-center p-8 bg-gray-100 text-gray-900">
        <h2 class="text-3xl font-bold mb-4">Projets Personnels</h2>
        <p>TODO</p>
      </div>

      {/* Block 3: Compétences / Formation */}
      <div class="flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-900">
        <h2 class="text-3xl font-bold mb-4">Compétences</h2>
        <p>TODO</p>
      </div>

      {/* Block 4: Contact */}
      <div class="flex flex-col items-center justify-center p-8 bg-white text-gray-900">
        <h2 class="text-3xl font-bold mb-4">Contact</h2>
        <p>Mail : thomasleroycontact25@gmail.com</p>
      </div>
    </div>
  );
});
