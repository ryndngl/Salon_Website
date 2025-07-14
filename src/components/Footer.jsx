
function Footer() {
  return (
    // ADJUSTED: Removed 'mt-12' from the className
    // If you want a *tiny* gap, you can try mt-4 or mt-8 instead of removing it completely.
    <footer className="bg-red-900 py-4 text-center shadow-md">
      <div className="container mx-auto">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Van's Glow Up Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;