export default function LandingHeader() {
  return (
    <header className="bg-ps-primary text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <img
          src="/logo.svg"
          alt="Логотип Повітряних Сил ЗСУ"
          className="mx-auto mb-6 h-16 w-auto"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Підтримка поруч, коли вона потрібна. ТИ НЕ ОДИН
        </h1>
        <p className="text-lg mb-8 text-gray-200">
          Психологічна підтримка для військовослужбовців Повітряних Сил ЗСУ та
          членів їхніх сімей
        </p>
        <img
          src="/qr.png"
          alt="QR-код для швидкого доступу"
          className="mx-auto w-32 h-32 mb-6 bg-white p-2 rounded"
        />
        <a
          href="/consultation"
          className="inline-block bg-ps-gold text-ps-primary font-semibold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition"
        >
          Пройти опитування / Отримати допомогу
        </a>
      </div>
    </header>
  );
}
