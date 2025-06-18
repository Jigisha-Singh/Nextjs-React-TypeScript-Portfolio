export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 dark:bg-muted/20 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-foreground/70">
          &copy; {currentYear} Jigisha Singh. Crafted with{" "}
          <span role="img" aria-label="love" className="text-red-500">❤️</span> and Next.js.
        </p>
      </div>
    </footer>
  );
}
