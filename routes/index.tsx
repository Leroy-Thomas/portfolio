import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import LinkCV from "../islands/button_link_cv.tsx";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-white min-h-screen">
      <Head>
        <title>Thomas Leroy</title>
      </Head>

      <div class="max-w-screen-md mx-auto mb-8">
        <h1 class="text-4xl font-bold">Bienvenue sur mon portfolio.</h1>
        <p class="my-4">
          Je suis Thomas Leroy, un étudiant en BUT Informatique à l'IUT de
          Nantes.
        </p>
      </div>

      {/* Block 1: Contact */}
      <div class="flex flex-col items-center justify-center p-8 bg-white text-gray-900 mb-8">
        <h2 class="text-3xl font-bold mb-4">Mes Informations</h2>
        <p>Mail : thomasleroycontact25@gmail.com</p>
        <p>Numéro de téléphone : 07 66 00 55 06</p>
        <a href="www.linkedin.com/in/thomas-leroy-contact">
          LinkedIn : www.linkedin.com/in/thomas-leroy-contact
        </a>
        <LinkCV />
      </div>

      {/* Grille 2x2 pour les projets et compétences */}
      <div
        class="max-w-screen-lg mx-auto p-4"
        style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;"
      >
        {/* Block 2: Projets Académiques */}
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-3xl font-bold mb-4">Projets Académiques</h2>
          <p>TODO</p>
        </div>

        {/* Block 3: Projets Professionnels */}
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-3xl font-bold mb-4">Projets Professionnels</h2>
          <p>TODO</p>
        </div>

        {/* Block 4: Projets Personnels */}
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-3xl font-bold mb-4">Projets Personnels</h2>
          <p>TODO</p>
        </div>

        {/* Block 5: Compétences / Formation */}
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-3xl font-bold mb-4">Compétences</h2>
          <p>Base de Linux</p>
          <p>Base de HTML</p>
          <p>Base de CSS</p>
          <p>Base de Git</p>
        </div>
      </div>
    </div>
  );
});
