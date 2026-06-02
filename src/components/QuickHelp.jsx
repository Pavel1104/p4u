export default function QuickHelp() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Швидка допомога</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/self-help"
            className="block bg-ps-primary text-white py-6 px-4 rounded-lg hover:opacity-90 transition"
          >
            <h3 className="text-lg font-semibold mb-2">Панічна атака</h3>
            <p className="text-sm text-gray-200">
              Техніки стабілізації та дихання
            </p>
          </a>
          <a
            href="/self-help"
            className="block bg-ps-gold text-ps-primary py-6 px-4 rounded-lg hover:opacity-90 transition"
          >
            <h3 className="text-lg font-semibold mb-2">Ступор, істерика</h3>
            <p className="text-sm">Перша психологічна допомога</p>
          </a>
          <a
            href="/self-help"
            className="block bg-ps-primary text-white py-6 px-4 rounded-lg hover:opacity-90 transition"
          >
            <h3 className="text-lg font-semibold mb-2">Загальні техніки</h3>
            <p className="text-sm text-gray-200">
              Дихалексика, релаксація, самоконтроль
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
