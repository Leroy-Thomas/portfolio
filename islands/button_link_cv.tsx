export default function LinkCV() {
  return (
    <div class="flex gap-8 py-6">
      <a 
        href="/test.pdf" 
        target="_blank"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
      >
        Télécharger mon cv
      </a>
    </div>
  );
}
