export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-xl text-white py-24 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-3xl font-bold">
          &copy; {currentYear} The Owls. All rights reserved.
        </p>
        <p className="mt-2">Website design and development by @NatanOihman</p>
      </div>
    </footer>
  );
}
