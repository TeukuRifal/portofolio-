

export default function Contact() {
  return (
    <>
      <section className="p-4 max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Kontak Saya</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nama" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <textarea placeholder="Pesan" className="border p-2 rounded" />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Kirim</button>
        </form>
      </section>
    </>
  );
}
