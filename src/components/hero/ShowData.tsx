export default function ShowData() {
  return (
    <div className="flex flex-col gap-10 justify-start">
      <div className="bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
        <h1 className="text-6xl font-black mb-4 text-red-600">THE OWLS</h1>
        <p className="text-2xl font-bold italic">
          Rock `n` Roll might not solve your problems, but it does let you dance
          all over them
        </p>
        <p>― Pete Townshend</p>
      </div>
      <div className="bg-blue-500 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 ">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Owls-Logo-wftpTF7ltNw5i5aFWUMvaWpsVKbPQc.png"
          alt="The Owls Logo"
          width={300}
          height={300}
          className="mx-auto hover:animate-spin"
        />
      </div>
    </div>
  );
}
