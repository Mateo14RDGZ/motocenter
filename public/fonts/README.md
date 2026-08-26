# Mazius Display (falta el archivo)

El "MƦ14" del footer usa la fuente **Mazius Display — Extra Bold Italic**, de la
fundición Fenotype. Es una fuente de pago; no está incluida en este repo.

Para activarla:

1. Comprar/descargar la licencia web (.woff2) en fenotype.com (o el marketplace
   donde se haya adquirido).
2. Colocar el archivo acá con este nombre exacto:
   `public/fonts/MaziusDisplay-ExtraItalicBold.woff2`
3. Listo — el `@font-face` ya está declarado en `src/styles/tailwind.css` y
   apunta a `/fonts/MaziusDisplay-ExtraItalicBold.woff2`.

Mientras el archivo no esté, el navegador cae automáticamente al fallback
(`Playfair Display` → `Georgia` → serif), así que el sitio nunca se rompe por
su ausencia.
