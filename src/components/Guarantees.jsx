export default function Guarantees() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Важливо знати</h2>
        <ul className="space-y-4 text-left max-w-md mx-auto">
          <li className="bg-white p-4 rounded-lg border border-gray-200">
            🔒 <strong>Конфіденційність</strong> — усі ваші дані та результати
            тестів залишаються лише у вас.
          </li>
          <li className="bg-white p-4 rounded-lg border border-gray-200">
            🎖️ <strong>Відсутність впливу на службу</strong> — звернення на
            платформі не фіксуються у службових документах та не впливають на
            кар'єру.
          </li>
          <li className="bg-white p-4 rounded-lg border border-gray-200">
            👤 <strong>Анонімність</strong> — ви можете користуватися платформою
            без введення реального імені, прізвища чи військового звання.
          </li>
        </ul>
      </div>
    </section>
  );
}
