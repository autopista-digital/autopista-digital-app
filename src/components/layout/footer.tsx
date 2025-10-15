export function Footer() {
  return (
    <footer className="flex-shrink-0 border-t">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EvolveNow Digital. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
