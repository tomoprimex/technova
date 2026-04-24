'use client'; // <- must be at the top of the file

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js'); // dynamic import
  }, []);

  return null;
}